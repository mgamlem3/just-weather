/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { authReducer } from "./reducers/auth";
import { weatherReducer } from "./reducers/weather";
import startSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
	reducer: {
		auth: authReducer,
		weather: weatherReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(startSagas);
