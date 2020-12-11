/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Nav from "../../nav";

import styles from "../../../styles/base.scss";

const Page: React.FunctionComponent = ({ children }) => {
	return (
		<React.Fragment>
			<Nav />
			<main>
				<div className={styles.app}>{children}</div>
			</main>
			{/* <Footer /> */}
		</React.Fragment>
	);
};

export default Page;
