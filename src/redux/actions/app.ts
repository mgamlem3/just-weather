/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	AppAction,
	ChangeTemperatureUnitActionType,
} from "../../types/redux/actions/app";

export const changeTemperatureUnit = (unit: string): AppAction => {
	return { type: ChangeTemperatureUnitActionType, unit };
};
