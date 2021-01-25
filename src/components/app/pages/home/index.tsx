/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Page from "../page";
import Map, { MapStyles } from "../../../map";

import "./styles.scss";

const Home: React.FunctionComponent = () => {
	return (
		<Page>
			<div style={{ color: "red" }}>hello world</div>
			<Map mapStyle={MapStyles.Base} />
		</Page>
	);
};

export default Home;
