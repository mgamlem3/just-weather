/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Nav from "../../nav";

import "../../../styles/base.scss";

const Page: React.FunctionComponent = ({ children }) => {
	return (
		<React.Fragment>
			<Nav />
			<div className='app'>{children}</div>
		</React.Fragment>
	);
};

export default Page;
