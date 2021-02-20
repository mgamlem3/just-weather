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
const Privacy = React.lazy(() => import("./pages/privacy"));
const Terms = React.lazy(() => import("./pages/terms"));
const Weather = React.lazy(() => import("./pages/weather"));

import "../../styles/base.scss";
import { initializeFirebase } from "./firebase";

const customHistory = createBrowserHistory();
initializeFirebase();

const App: React.FunctionComponent = () => {
	return (
		<div className='app'>
			<Suspense fallback={<div>Loading...</div>}>
				<Router history={customHistory}>
					<Switch>
						<Route path={Routes.Privacy} component={Privacy} />
						<Route path={Routes.Terms} component={Terms} />
						<Route path={Routes.Weather} component={Weather} />
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
