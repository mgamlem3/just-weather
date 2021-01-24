/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import {
	onSignInRequested,
	onSignInWithGoogleRequested,
} from "../../redux/actions/auth";
import {
	selectAuthError,
	selectAuthProcessing,
} from "../../redux/selectors/auth";

import styles from "./styles.scss";

interface SignInModalProps {
	authError: string | undefined;
	authIsProcessing: boolean;
	isOpen: boolean;
	onClose: () => void;
	signInUser: (username: string, password: string) => void;
	signInWithGoogle: () => void;
}

interface SignInModalState {
	username: string;
	password: string;
}

class SignInModal extends React.PureComponent<
	SignInModalProps,
	SignInModalState
> {
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

	onSignInWithGoogleClicked = () => {
		const { signInWithGoogle } = this.props;
		signInWithGoogle();
		this.setState({ username: "", password: "" });
	};

	render() {
		const { isOpen, onClose, authError, authIsProcessing } = this.props;
		const { username, password } = this.state;

		return (
			<Modal show={isOpen} onHide={onClose}>
				<Modal.Header closeButton>
					<Modal.Title>Sign In</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{authError && (
						<Alert variant='danger'>
							<div className={styles.errorAlertContent}>
								<ErrorOutlineIcon
									className={styles.errorIcon}
								/>
								Uh Oh. Something went wrong. Try again.
							</div>
						</Alert>
					)}
					<div className={styles.signInContainer}>
						<div className={styles.inputAndLabelContainer}>
							<label>username:</label>
							<input
								id='just-weather-username'
								value={username}
								onChange={(e) =>
									this.setState({
										username: e.target.value,
									})
								}
							/>
						</div>
						<div className={styles.inputAndLabelContainer}>
							<label>password:</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(e) =>
									this.setState({
										password: e.target.value,
									})
								}
							/>
						</div>
						{authIsProcessing ? (
							<div className={styles.spinnerContainer}>
								<Spinner animation='border' variant='primary' />
							</div>
						) : (
							<React.Fragment>
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
							</React.Fragment>
						)}
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

function mapStateToProps(state: never) {
	const authError = selectAuthError(state);
	const authIsProcessing = selectAuthProcessing(state);

	return {
		authError,
		authIsProcessing,
	};
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		signInUser: (username, password) =>
			dispatch(onSignInRequested(username, password)),
		signInWithGoogle: () => dispatch(onSignInWithGoogleRequested()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
