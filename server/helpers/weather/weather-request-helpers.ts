/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import axios from "axios";
import { CurrentWeatherResponse } from "../../types";

export async function currentWeatherByCityApiRequest(
	q: string,
): Promise<CurrentWeatherResponse> {
	if (!q) {
		throw new Error("Must provide data to request");
	}

	const res = await requestWeather(`q=${q}`);

	return res;
}

export async function currentWeatherByZipRequest(
	zip: string,
): Promise<CurrentWeatherResponse> {
	if (!zip) {
		throw new Error("Must provide data to request");
	}

	const res = await requestWeather(`zip=${zip}`);

	return res;
}

export async function currentWeatherByLatLongRequest(
	lat: string,
	long: string,
): Promise<CurrentWeatherResponse> {
	if (!lat || !long) {
		throw new Error("Must provide data to request");
	}

	const res = await requestWeather(`lat=${lat}&lon=${long}`);

	return res;
}

async function requestWeather(param: string): Promise<CurrentWeatherResponse> {
	const res: CurrentWeatherResponse = {
		status: 500,
	};

	await axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?${param}&appId=${process.env.WEATHER_KEY}`,
		)
		.then((response) => {
			res.status = response.status;
			res.message = response.statusText;
			res.data = response.data;
		})
		.catch((error) => {
			console.error(error);
			res.message = `Error while fetching weather with ${param}`;
		});

	return res;
}
