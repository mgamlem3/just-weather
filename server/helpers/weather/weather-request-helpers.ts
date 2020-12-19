/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import axios from "axios";
import { CurrentWeatherResponse } from "../../types";

export const currentWeatherByCityApiRequest = async (
	q: string,
): Promise<CurrentWeatherResponse> => {
	if (!q) {
		throw new Error("Must provide data to request");
	}

	const res = await requestWeather(`q=${q}`);

	return res;
};

export const currentWeatherByZipRequest = async (
	zip: string,
): Promise<CurrentWeatherResponse> => {
	if (!zip) {
		throw new Error("Must provide data to request");
	}

	const res = await requestWeather(`zip=${zip}`);

	return res;
};

export const currentWeatherByLatLongRequest = async (
	lat: string,
	lon: string,
): Promise<CurrentWeatherResponse> => {
	if (!lat || !lon) {
		throw new Error("Must provide data to request");
	}

	const res = await requestWeather(`lat=${lat}&lon=${lon}`);

	return res;
};

export const currentWeatherByOneCall = async (
	lat: string,
	lon: string,
): Promise<CurrentWeatherResponse> => {
	if (!lat || !lon) {
		throw new Error("Must provide lat and lon");
	}

	const res = await requestWeatherByOneCall(lat, lon);

	return res;
};

const requestWeather = async (
	param: string,
): Promise<CurrentWeatherResponse> => {
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
};

const requestWeatherByOneCall = async (
	lat: string,
	lon: string,
): Promise<CurrentWeatherResponse> => {
	const res: CurrentWeatherResponse = {
		status: 500,
	};

	await axios
		.get(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appId=${process.env.WEATHER_KEY}`,
		)
		.then((response) => {
			res.status = response.status;
			res.message = response.statusText;
			res.data = response.data;
		})
		.catch((error) => {
			console.error(error);
			res.message = "Internal error while fetching via onecall api";
		});

	return res;
};
