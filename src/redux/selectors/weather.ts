/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { State } from "../../types/redux/state";

export const selectCoordinates = (
	state: State,
): { lat?: number; lon?: number } => {
	return {
		lat: state.weather?.forecast?.lat,
		lon: state.weather?.forecast?.lon,
	};
};

export const selectLocation = (state: State): string =>
	state.weather.location || "";
