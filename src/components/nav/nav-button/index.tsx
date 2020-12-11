/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

interface NavButtonProps {
	link: string;
	text: string;
}

const NavButton: React.FunctionComponent<NavButtonProps> = ({ link, text }) => {
	return (
		<div className={styles.navButtonContainer}>
			<Link to={link} style={{ textDecoration: "inherit" }}>
				<div className={styles.navButton}>{text}</div>
			</Link>
		</div>
	);
};

export default NavButton;
