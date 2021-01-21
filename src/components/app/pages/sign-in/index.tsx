/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";

import { onSignInRequested } from "../../../../redux/actions/auth";
import { selectCurrentUser } from "../../../../redux/selectors/auth";

import Page from "../page";

import "./styles.scss";

interface SignInProps {
	signInUser: () => void;
	user: string;
}

class SignIn extends React.PureComponent<SignInProps> {
	render() {
		const { signInUser, user } = this.props;
		return (
			<Page>
				<label>username:</label>
				<input />
				<label>password:</label>
				<input />
				<button onClick={signInUser}>sign in</button>
				<div>{user}</div>
			</Page>
		);
	}
}

function mapStateToProps(state: never) {
	const user = selectCurrentUser(state);

	return {
		user,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return { signInUser: () => dispatch(onSignInRequested()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
