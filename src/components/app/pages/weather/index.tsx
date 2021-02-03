/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { useSelector } from "react-redux";

import { selectLocation } from "../../../../redux/selectors/weather";
import Page from "../page";

import styles from "./styles.scss";

const Weather: React.FunctionComponent = () => {
	const location = useSelector(selectLocation);

	return (
		<Page>
			<h1 className={styles.location}>{location}</h1>
		</Page>
	);
};

export default Weather;
