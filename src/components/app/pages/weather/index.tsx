/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Page from "../page";

import "./styles.scss";

const Weather: React.FunctionComponent = () => {
	return (
		<Page>
			<div style={{ color: "red" }}>weather</div>
		</Page>
	);
};

export default Weather;
