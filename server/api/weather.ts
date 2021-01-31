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
	currentWeatherByOneCall,
} from "../helpers/weather/weather-request-helpers";
import { sendWeatherResponse } from "../helpers/weather/weather-response-helpers";
import { send500 } from "../helpers/error-response-helpers";
import Axios from "axios";

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

weatherApi.get(
	"/onecall",
	bodyParser.json(),
	async (req: Request, res: Response) => {
		try {
			if (!req.body?.lat || !req.body?.lon)
				res.status(400).send("Must include lat and lon");
			else if (
				!validator.isDecimal(req.body.lat.toString()) ||
				!validator.isDecimal(req.body.lon.toString())
			)
				res.status(400).send("Lat and Lon must be decimals");

			const response = await currentWeatherByOneCall(
				req.body.lat,
				req.body.lon,
			);

			sendWeatherResponse(res, response);
		} catch (error) {
			console.error(error);
			send500(res);
		}
	},
);

weatherApi.get("/search", async (req: Request, res: Response) => {
	try {
		if (!req.query.location)
			res.status(400).send("Must include a location");
		else {
			const geocodeResponse = await Axios.get("/api/map/geocode", {
				data: {
					location: req.query.location,
				},
				proxy: {
					host: "localhost",
					port: 3000,
				},
			});

			const weatherResponse = await Axios.get("/api/weather/onecall", {
				data: {
					lat: geocodeResponse.data.lat,
					lon: geocodeResponse.data.lon,
				},
				proxy: {
					host: "localhost",
					port: 3000,
				},
			});

			sendWeatherResponse(res, weatherResponse);
		}
	} catch (error) {
		console.error(error);
		send500(res);
	}
});

weatherApi.get("/", (req: Request, res: Response) => {
	res.end();
});

export default weatherApi;
