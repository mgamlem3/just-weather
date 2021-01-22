/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import startAuthSaga from "./auth";
import { all } from "redux-saga/effects";

export default function* startSagas(): unknown {
	yield all([startAuthSaga()]);
}
