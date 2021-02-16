/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { AppState } from "./app";
import { AuthState } from "./auth";
import { WeatherState } from "./weather";

export interface State {
	app: AppState;
	auth: AuthState;
	weather: WeatherState;
}
