/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import validator from "validator";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

import { ModalContentState } from ".";
import { onSendForgotPasswordRequested } from "../../redux/actions/auth";
import {
	selectAuthProcessing,
	selectSendForgotPasswordEmailSuccess,
} from "../../redux/selectors/auth";
import { State } from "../../types/redux/state";

import styles from "./styles.scss";

interface ForgotPasswordBodyProps {
	onChangeModalContent: (state: ModalContentState) => void;
	authIsProcessing: boolean;
	success: boolean;
	sendForgotPasswordEmail: (username: string) => void;
}

interface ForgotPasswordBodyState {
	email: string;
	emailIsInvalid: boolean;
	showAlert: boolean;
}

class ForgotPasswordBody extends React.PureComponent<
	ForgotPasswordBodyProps,
	ForgotPasswordBodyState
> {
	state = {
		email: "",
		emailIsInvalid: false,
		showAlert: true,
	};

	onSendClicked = (): void => {
		const { sendForgotPasswordEmail } = this.props;
		const { email, emailIsInvalid } = this.state;
		this.resetAlert();

		if (!emailIsInvalid) sendForgotPasswordEmail(email);
	};

	validateEmail = (): void => {
		const { email } = this.state;
		this.setState({ emailIsInvalid: !validator.isEmail(email) });
	};

	resetAlert = (): void => {
		this.setState({ showAlert: true });
	};

	render(): JSX.Element {
		const { onChangeModalContent, authIsProcessing, success } = this.props;
		const { email, emailIsInvalid, showAlert } = this.state;

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
							Email sent
						</div>
					</Alert>
				)}
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
					</Form>
					{authIsProcessing ? (
						<div className={styles.spinnerContainer}>
							<Spinner animation='border' variant='primary' />
						</div>
					) : (
						<React.Fragment>
							<Button onClick={this.onSendClicked}>send</Button>
							<Button
								variant='link'
								onClick={() =>
									onChangeModalContent(
										ModalContentState.SignIn,
									)
								}
							>
								sign in
							</Button>
						</React.Fragment>
					)}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: State) => {
	const authIsProcessing = selectAuthProcessing(state);
	const success = selectSendForgotPasswordEmailSuccess(state);

	return {
		authIsProcessing,
		success,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		sendForgotPasswordEmail: (username: string) =>
			dispatch(onSendForgotPasswordRequested(username)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordBody);
