/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	WeatherAction,
	SearchActionTypes,
} from "../../types/redux/actions/weather";

export const onSearchRequested = (search: string): WeatherAction => {
	return { type: SearchActionTypes.Processing, search };
};

export const onSearchSucceeded = (result: never): WeatherAction => {
	return { type: SearchActionTypes.Success, result };
};

export const onSearchErrored = (error: string): WeatherAction => {
	return { type: SearchActionTypes.Failed, error };
};
