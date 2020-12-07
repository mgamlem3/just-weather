/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Response } from "express";
import { CurrentWeatherResponse } from "../../types";

export function sendWeatherResponse(
	res: Response,
	weatherResponse: CurrentWeatherResponse,
): void {
	if (weatherResponse.status < 300) {
		res.json(weatherResponse.data);
	} else {
		res.status(500).send(
			weatherResponse.message || "Error while getting weather",
		);
	}
}
