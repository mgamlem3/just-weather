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
	signInUser: (username: string, password: string) => void;
	user: string;
}

interface SignInState {
	username: string;
	password: string;
}

class SignIn extends React.PureComponent<SignInProps, SignInState> {
	state = {
		username: "",
		password: "",
	};

	onSignInClicked = () => {
		const { signInUser } = this.props;
		const { username, password } = this.state;
		signInUser(username, password);
		this.setState({ username: "", password: "" });
	};

	render() {
		const { user } = this.props;
		const { username, password } = this.state;

		return (
			<Page>
				<label>username:</label>
				<input
					id='username'
					value={username}
					onChange={(e) =>
						this.setState({ username: e.target.value })
					}
				/>
				<label>password:</label>
				<input
					type='password'
					id='password'
					value={password}
					onChange={(e) =>
						this.setState({ password: e.target.value })
					}
				/>
				<button onClick={this.onSignInClicked}>sign in</button>
				<button onClick={() => console.log(user)}>log</button>
			</Page>
		);
	}
}

function mapStateToProps(state: never) {
	const user = selectCurrentUser(state);

	return {
		user,
	};
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		signInUser: (username, password) =>
			dispatch(onSignInRequested(username, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
