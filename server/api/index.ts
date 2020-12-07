/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import express, { Request, Response, Router } from "express";
import weatherApi from "./weather";

const api: Router = express.Router();

api.use("/weather", weatherApi);

api.all("/", (req: Request, res: Response) => {
	res.sendStatus(501);
});

export default api;
