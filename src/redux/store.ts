/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./reducers/counter";

export default configureStore({
	reducer: {
		counter: counterReducer,
	},
});
