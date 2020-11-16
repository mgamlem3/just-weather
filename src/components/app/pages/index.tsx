/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Page from "./page";
import HomeContent from "./home";

export const Home: React.FunctionComponent = () => {
	return (
		<Page>
			<HomeContent />
		</Page>
	);
};
