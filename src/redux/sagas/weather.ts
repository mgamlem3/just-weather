/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";

import { baseURL } from "../../config";
import {
	WeatherAction,
	SearchActionTypes,
} from "../../types/redux/actions/weather";

function* searchWatcher() {
	yield takeLatest(SearchActionTypes.Processing, searchWorker);
}

function* searchWorker(action: WeatherAction) {
	if (!action.search)
		yield put({
			type: SearchActionTypes.Failed,
			error: "Must include search string",
		});
	else {
		try {
			const result = yield axios.get(`${baseURL}/api/weather/search`, {
				params: {
					location: action.search,
				},
			});

			yield put({
				type: SearchActionTypes.Success,
				result: result.data,
			});
		} catch (error) {
			console.error("Error while fetching weather from api");
			yield put({
				type: SearchActionTypes.Failed,
				error: "Error while fetching weather from api",
			});
		}
	}
}

export default function* startWeatherSaga(): unknown {
	yield all([searchWatcher()]);
}
