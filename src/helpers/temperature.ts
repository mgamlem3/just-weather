/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { TemperatureInfo } from "../types/redux/state/weather";

export const getTemperatureByUnit = (
	temp: number | TemperatureInfo | undefined,
	unit: string,
): number => {
	if (!temp) return Number.MIN_SAFE_INTEGER;
	else if (typeof temp === "object") temp = temp.max;

	switch (unit) {
		case "K":
			return temp;
		case "C":
			return Math.round(temp - 273.15);
		case "F":
			return Math.round(temp * (9 / 5) - 459.67);
	}

	return Number.MIN_SAFE_INTEGER;
};
