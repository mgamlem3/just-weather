/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from "./routes";

import { Home } from "./pages";

import "../../styles/base.scss";

const customHistory = createBrowserHistory();

const App: React.FunctionComponent = () => {
	return (
		<div className='app'>
			<Router history={customHistory}>
				<Switch>
					<Route path={Routes.Home}>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
