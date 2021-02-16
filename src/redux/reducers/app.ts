/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { AppState, InitialAppState } from "../../types/redux/state/app";

import {
	AppAction,
	ChangeTemperatureUnitActionType,
} from "../../types/redux/actions/app";

export const appReducer = (
	state: AppState = InitialAppState,
	action: AppAction,
): AppState => {
	switch (action.type) {
		case ChangeTemperatureUnitActionType:
			return {
				...state,
				unit: action.unit || "F",
			};
		default:
			return state;
	}
};
