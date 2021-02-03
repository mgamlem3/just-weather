/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	WeatherState,
	InitialWeatherState,
} from "../../types/redux/state/weather";
import {
	WeatherAction,
	SearchActionTypes,
} from "../../types/redux/actions/weather";

export const weatherReducer = (
	state: WeatherState = InitialWeatherState,
	action: WeatherAction,
): WeatherState => {
	switch (action.type) {
		case SearchActionTypes.Processing:
			return {
				...state,
				isProcessing: true,
				location: action.search,
			};
		case SearchActionTypes.Success:
			return {
				...state,
				isProcessing: false,
				forecast: action.result,
			};
		case SearchActionTypes.Failed:
			return {
				...state,
				isProcessing: false,
				location: null,
				forecast: null,
				error: action.error,
			};
		default:
			return state;
	}
};
