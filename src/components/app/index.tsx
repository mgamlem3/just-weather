/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from "./routes";

const Home = React.lazy(() => import("./pages/home"));

import "../../styles/base.scss";

const customHistory = createBrowserHistory();

const App: React.FunctionComponent = () => {
	return (
		<div className='app'>
			<Suspense fallback={<div>Loading...</div>}>
				<Router history={customHistory}>
					<Switch>
						<Route path={Routes.Home}>
							<Home />
						</Route>
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
};

export default App;
