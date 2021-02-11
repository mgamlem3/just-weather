/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { withRouter } from "react-router-dom";
import { History } from "history";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import { onSearchRequested } from "../../redux/actions/weather";

import styles from "./styles.scss";

interface SearchBoxProps {
	history: History;
	location: Location;
	search: (search: string) => void;
}

interface SearchBoxState {
	inputValue: string;
}

class SearchBox extends React.PureComponent<SearchBoxProps, SearchBoxState> {
	state = {
		inputValue:
			// eslint-disable-next-line react/destructuring-assignment
			decodeURIComponent(this.props.location.pathname).replace(
				/\/(weather\/)?/,
				"",
			),
		// .replace(/[+%\d]+/, " ") || "",
	};

	componentDidMount() {
		const { search } = this.props;
		const { inputValue } = this.state;

		if (inputValue) search(inputValue);
	}

	onInputChange = (value: string): void => {
		this.setState({ inputValue: value });
	};

	onKeyDown = (e): void => {
		const { history } = this.props;
		const { inputValue } = this.state;

		if (e.key !== "Enter") return;
		else history.push(`/weather/${encodeURI(inputValue)}`);
	};

	render(): JSX.Element {
		const { inputValue } = this.state;

		return (
			<div className={styles.container}>
				<BsSearch className={styles.icon} />
				<Form.Control
					className={styles.input}
					value={inputValue}
					placeholder='Bellingham, WA'
					onChange={(e) => this.onInputChange(e.target.value)}
					onKeyDown={this.onKeyDown}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		search: (search: string) => dispatch(onSearchRequested(search)),
	};
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withRouter<any, any>(
	connect(null, mapDispatchToProps)(SearchBox),
);
