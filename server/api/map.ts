/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import express, { Request, Response, Router } from "express";
import bodyParser from "body-parser";
import validator from "validator";
import { send500 } from "../helpers/error-response-helpers";
import { getGeocodedLocation } from "../helpers/map/map-request-helpers";

const mapApi: Router = express.Router();

mapApi.get(
	"/geocode",
	bodyParser.json(),
	async (req: Request, res: Response) => {
		try {
			if (!req.body?.location)
				res.status(400).send("Must include location");
			if (!validator.matches(req.body.location, /[\w\d -,]+/))
				res.status(400).send("Location must be alphanumeric");
			const location = await getGeocodedLocation(req.body.location);

			res.json(location).end();
		} catch (error) {
			console.error(error);
			send500(res);
		}
	},
);

mapApi.get("/", (req: Request, res: Response) => {
	res.end();
});

export default mapApi;
