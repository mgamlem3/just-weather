/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { State } from "../../types/redux/state";
import { WeatherForecast, WeatherAlert } from "../../types/redux/state/weather";

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

export const selectHourlyForecast = (
	state: State,
): WeatherForecast[] | undefined => state.weather.forecast?.hourly;

export const selectDailyForecast = (
	state: State,
): WeatherForecast[] | undefined => state.weather.forecast?.daily;

export const selectLocation = (state: State): string =>
	state.weather.location || "";

export const selectWeatherAlerts = (state: State): WeatherAlert[] | undefined =>
	state.weather.forecast?.alerts;

export const selectWeatherIsProcessing = (state: State): boolean =>
	state.weather.isProcessing;
