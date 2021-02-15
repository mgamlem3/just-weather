/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { State } from "../../types/redux/state";
import { WeatherForecast } from "../../types/redux/state/weather";

export const selectCoordinates = (
	state: State,
): { lat?: number; lon?: number } => {
	return {
		lat: state.weather?.forecast?.lat,
		lon: state.weather?.forecast?.lon,
	};
};

export const selectCurrentWeather = (
	state: State,
): WeatherForecast | undefined => state.weather.forecast?.current;

export const selectLocation = (state: State): string =>
	state.weather.location || "";

export const selectWeatherIsProcessing = (state: State): boolean =>
	state.weather.isProcessing;
