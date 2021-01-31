/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { all } from "redux-saga/effects";

import startAuthSaga from "./auth";
import startWeatherSaga from "./weather";

export default function* startSagas(): unknown {
	yield all([startAuthSaga(), startWeatherSaga()]);
}
