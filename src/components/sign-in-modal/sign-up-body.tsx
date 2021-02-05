/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Button, Form, Spinner } from "react-bootstrap";
import validator from "validator";

import { ModalContentState } from ".";
import { onCreateUserRequested } from "../../redux/actions/auth";
import { selectAuthProcessing } from "../../redux/selectors/auth";
import { State } from "../../types/redux/state";

import styles from "./styles.scss";

interface SignUpBodyProps {
	onChangeModalContent: (state: ModalContentState) => void;
	signUpUser: (username: string, password: string) => void;
	authIsProcessing: boolean;
}

interface SignUpBodyState {
	email: string;
	password: string;
	confirmPassword: string;
	emailIsInvalid: boolean;
	passwordIsInvalid: boolean;
}

class SignUpBody extends React.PureComponent<SignUpBodyProps, SignUpBodyState> {
	state = {
		email: "",
		password: "",
		confirmPassword: "",
		emailIsInvalid: false,
		passwordIsInvalid: false,
	};

	onSignUpClicked = (): void => {
		const { signUpUser } = this.props;
		const {
			email,
			password,
			emailIsInvalid,
			passwordIsInvalid,
		} = this.state;

		if (!emailIsInvalid && !passwordIsInvalid) signUpUser(email, password);
	};

	validateEmail = (): void => {
		const { email } = this.state;
		this.setState({ emailIsInvalid: !validator.isEmail(email) });
	};

	validatePassword = (): void => {
		const { password, confirmPassword } = this.state;

		if (password === confirmPassword)
			this.setState({ passwordIsInvalid: false });
		else this.setState({ passwordIsInvalid: true });
	};

	render(): JSX.Element {
		const { onChangeModalContent, authIsProcessing } = this.props;
		const {
			email,
			password,
			confirmPassword,
			emailIsInvalid,
			passwordIsInvalid,
		} = this.state;

		return (
			<div className={styles.modalBodyContainer}>
				<Form noValidate>
					<Form.Group>
						<Form.Label>email:</Form.Label>
						<Form.Control
							type='text'
							value={email}
							onChange={(e) =>
								this.setState({
									email: e.target.value,
								})
							}
							isInvalid={emailIsInvalid}
							onBlur={this.validateEmail}
						/>
						<Form.Control.Feedback type='invalid'>
							please enter a valid email
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<Form.Label>password:</Form.Label>
						<Form.Control
							type='password'
							value={password}
							onChange={(e) =>
								this.setState({
									password: e.target.value,
								})
							}
							isInvalid={passwordIsInvalid}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>confirm password:</Form.Label>
						<Form.Control
							type='password'
							value={confirmPassword}
							onChange={(e) =>
								this.setState({
									confirmPassword: e.target.value,
								})
							}
							isInvalid={passwordIsInvalid}
							onBlur={this.validatePassword}
						/>
						<Form.Control.Feedback type='invalid'>
							passwords must match
						</Form.Control.Feedback>
					</Form.Group>
				</Form>
				{authIsProcessing ? (
					<div className={styles.spinnerContainer}>
						<Spinner animation='border' variant='primary' />
					</div>
				) : (
					<React.Fragment>
						<Button onClick={this.onSignUpClicked}>sign up</Button>
						<Button
							variant='link'
							onClick={() =>
								onChangeModalContent(ModalContentState.SignIn)
							}
						>
							sign in
						</Button>
					</React.Fragment>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: State) => {
	const authIsProcessing = selectAuthProcessing(state);

	return { authIsProcessing };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		signUpUser: (username, password) =>
			dispatch(onCreateUserRequested(username, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBody);
