/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../app/routes";

import styles from "./styles.scss";

const Footer: React.FunctionComponent = () => {
	return (
		<div className={styles.footer}>
			<div>Just Weather</div>
			<div className={styles.copyright}>
				© {new Date().getFullYear()} Michael Gamlem III
			</div>
			<div className={styles.links}>
				<Link to={Routes.Privacy}>Privacy</Link>
				<div>|</div>
				<Link to={Routes.Terms}>Terms</Link>
			</div>
		</div>
	);
};

export default Footer;
