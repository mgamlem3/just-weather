/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import path from "path";
import express, { Request, Response } from "express";

const PORT = 3000;
const DIST_DIR = path.join(__dirname);

const app = express();

app.use(express.static(DIST_DIR));

app.get(/.(jpg|png|js|css)$/, (req: Request, res: Response) => {
	checkContentEncoding(req, res);
	sendFile(req, res);
});

app.get("/", (req: Request, res: Response) => {
	req.url = "/index.html";
	checkContentEncoding(req, res);
	sendFile(req, res);
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

const sendFile = (req: Request, res: Response) => {
	res.sendFile(req.url);
};
