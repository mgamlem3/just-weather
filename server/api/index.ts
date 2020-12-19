/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import express, { Request, Response, Router } from "express";
import mapApi from "./map";
import weatherApi from "./weather";

const api: Router = express.Router();

api.use("/map", mapApi);
api.use("/weather", weatherApi);

api.all("/", (req: Request, res: Response) => {
	res.status(501).end();
});

export default api;
