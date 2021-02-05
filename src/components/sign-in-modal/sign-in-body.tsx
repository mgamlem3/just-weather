/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

import { ModalContentState } from ".";
import {
	onSignInRequested,
	onSignInWithGoogleRequested,
} from "../../redux/actions/auth";
import {
	selectAuthProcessing,
	selectSignInSuccess,
} from "../../redux/selectors/auth";

import styles from "./styles.scss";

interface SignInBodyProps {
	onChangeModalContent: (state: ModalContentState) => void;
	authIsProcessing: boolean;
	success: boolean;
	signInUser: (username: string, password: string) => void;
	signInWithGoogle: () => void;
}

interface SignInBodyState {
	username: string;
	password: string;
	showAlert: boolean;
}

class SignInBody extends React.PureComponent<SignInBodyProps, SignInBodyState> {
	state = {
		username: "",
		password: "",
		showAlert: true,
	};

	onSignInClicked = (): void => {
		const { signInUser } = this.props;
		const { username, password } = this.state;

		this.resetAlert();
		signInUser(username, password);
		this.setState({ username: "", password: "" });
	};

	onSignInWithGoogleClicked = (): void => {
		const { signInWithGoogle } = this.props;

		this.resetAlert();
		signInWithGoogle();
		this.setState({ username: "", password: "" });
	};

	resetAlert = (): void => {
		this.setState({ showAlert: true });
	};

	render(): JSX.Element {
		const { onChangeModalContent, authIsProcessing, success } = this.props;
		const { username, password, showAlert } = this.state;
		return (
			<React.Fragment>
				{success && showAlert && (
					<Alert
						variant='success'
						dismissible
						onClose={() => this.setState({ showAlert: false })}
					>
						<div className={styles.alertContent}>
							<BsCheckCircle className={styles.alertIcon} />
							Signed in
						</div>
					</Alert>
				)}
				<div className={styles.modalBodyContainer}>
					<Form.Group>
						<Form.Label>username:</Form.Label>
						<Form.Control
							id='just-weather-username'
							value={username}
							onChange={(e) =>
								this.setState({
									username: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>password:</Form.Label>
						<Form.Control
							type='password'
							id='password'
							value={password}
							onChange={(e) =>
								this.setState({
									password: e.target.value,
								})
							}
						/>
					</Form.Group>
					<div>
						<Button
							variant='link'
							onClick={() =>
								onChangeModalContent(ModalContentState.SignUp)
							}
						>
							sign up
						</Button>
						<Button
							variant='link'
							onClick={() =>
								onChangeModalContent(
									ModalContentState.ForgotPassword,
								)
							}
						>
							forgot password
						</Button>
					</div>
					{authIsProcessing ? (
						<div className={styles.spinnerContainer}>
							<Spinner animation='border' variant='primary' />
						</div>
					) : (
						<div className={styles.signInButtonsContainer}>
							<Button
								className={styles.signInButton}
								onClick={this.onSignInClicked}
							>
								sign in
							</Button>
							<Button
								onClick={this.onSignInWithGoogleClicked}
								variant='outline-primary'
							>
								sign in with Google
							</Button>
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: never) => {
	const authIsProcessing = selectAuthProcessing(state);
	const success = selectSignInSuccess(state);

	return {
		authIsProcessing,
		success,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		signInUser: (username, password) =>
			dispatch(onSignInRequested(username, password)),
		signInWithGoogle: () => dispatch(onSignInWithGoogleRequested()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInBody);
