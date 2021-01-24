/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./styles.scss";

class SearchBox extends React.PureComponent {
	render(): JSX.Element {
		return (
			<div className={styles.container}>
				<SearchIcon className={styles.icon} />
				<input className={styles.input} placeholder='Bellingham, WA' />
			</div>
		);
	}
}

export default SearchBox;