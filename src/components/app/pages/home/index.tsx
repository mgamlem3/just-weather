/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { BrowserLocationMap, MapStyles } from "../../../map";
import Page from "../page";

import styles from "./styles.scss";

const Home: React.FunctionComponent = () => {
	return (
		<Page>
			<div style={{ color: "red" }}>hello world</div>
			<div className={styles.map}>
				<BrowserLocationMap mapStyle={MapStyles.Base} />
			</div>
		</Page>
	);
};

export default Home;
