/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import path from "path";
import express, { Request, Response } from "express";
import api from "./api";
import fs from "fs";
import { check } from "express-validator";

const PORT = 3000;
const DIST_DIR = path.join(__dirname);

const app = express();

app.use("/api", api);

app.use("/", express.static(DIST_DIR));

app.get(/.(jpg|png|js|css)$/, (req: Request, res: Response) => {
	const cleanUrl: string = sanitizeUrl(req.url);

	checkContentEncoding(req, res);
	if (checkIfFileAllowed(cleanUrl)) sendFile(cleanUrl, res);
	else res.status(404).end();
});

app.get("/", (req: Request, res: Response) => {
	const INDEX_URL = "/index.html";

	req.url = INDEX_URL;
	checkContentEncoding(req, res);
	sendFile(INDEX_URL, res);
});

app.listen(PORT, () => {
	console.log(`App listening to ${PORT}....`);
});

const checkContentEncoding = (req: Request, res: Response) => {
	if (req.acceptsEncodings("br")) {
		req.url += ".br";
		res.set("Content-Encoding", "br");
	} else if (req.acceptsEncodings("gzip")) {
		req.url += ".gz";
		res.set("Content-Encoding", "gzip");
	}
};

const checkIfFileAllowed = (fileName: string): boolean => {
	if (fs.existsSync(DIST_DIR + fileName)) {
		return true;
	}
	return false;
};

const sendFile = (path: string, res: Response) => {
	res.sendFile(path);
};

const sanitizeUrl = (url: string): string => {
	return check(url).trim().escape().toString();
};
