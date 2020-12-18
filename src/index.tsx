/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import App from "./components/app";

if (typeof window !== "undefined") {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById("root") as HTMLElement,
	);
}
