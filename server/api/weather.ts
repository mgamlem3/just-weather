/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import express, { Request, Response, Router } from "express";
import bodyParser from "body-parser";
import validator from "validator";
import {
	currentWeatherByCityApiRequest,
	currentWeatherByZipRequest,
	currentWeatherByLatLongRequest,
} from "../helpers/weather/weather-request-helpers";
import { sendWeatherResponse } from "../helpers/weather/weather-response-helpers";
import { send500 } from "../helpers/error-response-helpers";

const weatherApi: Router = express.Router();

weatherApi.get("/city/:city", async (req: Request, res: Response) => {
	try {
		if (!req.params?.city) res.status(400).send("Must include a city");
		else if (!validator.isAlpha(req.params.city))
			res.status(400).send("Must request with letters only");

		const response = await currentWeatherByCityApiRequest(req.params.city);

		sendWeatherResponse(res, response);
	} catch (error) {
		console.error(error);
		send500(res);
	}
});

weatherApi.get("/zip/:zip", async (req: Request, res: Response) => {
	try {
		if (!req.params?.zip) res.status(400).send("Must include a zip");
		else if (
			!validator.isInt(req.params.zip) ||
			!validator.isLength(req.params.zip, { min: 5, max: 5 })
		)
			res.status(400).send("Must request with valid zip");

		const response = await currentWeatherByZipRequest(req.params.zip);

		sendWeatherResponse(res, response);
	} catch (error) {
		console.error(error);
		send500(res);
	}
});

weatherApi.get(
	"/coordinates",
	bodyParser.json(),
	async (req: Request, res: Response) => {
		const COORD_REGEX = /[°NWSE]/g;
		try {
			if (!req.body?.lat || !req.body?.long)
				res.status(400).send("Must include latitude and longitude");
			const lat = req.body.lat.replace(COORD_REGEX, "").trim();
			const long = req.body.long.replace(COORD_REGEX, "").trim();
			if (!validator.isDecimal(lat) || !validator.isDecimal(long))
				res.status(400).send(
					"Must request with valid latitude and longitude",
				);

			const response = await currentWeatherByLatLongRequest(lat, long);

			sendWeatherResponse(res, response);
		} catch (error) {
			console.error(error);
			send500(res);
		}
	},
);

weatherApi.get("/", (req: Request, res: Response) => {
	res.send("hello");
});

export default weatherApi;
