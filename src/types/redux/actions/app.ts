/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface AppAction {
	type: string;
	unit?: string;
}

export const ChangeTemperatureUnitActionType = "CHANGE_TEMEPERATURE_UNIT";