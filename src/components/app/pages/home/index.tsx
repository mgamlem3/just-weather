/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Counter from "../../../counter";
import Page from "../page";

import "./styles.scss";

const Home: React.FunctionComponent = () => {
	return (
		<Page>
			<div style={{ color: "red" }}>hello world</div>
			<Counter />
		</Page>
	);
};

export default Home;
