/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import validator from "validator";
import { Button, Form, Spinner } from "react-bootstrap";

import { ModalContentState } from ".";
import { onSendForgotPasswordRequested } from "../../redux/actions/auth";
import { selectAuthProcessing } from "../../redux/selectors/auth";
import { State } from "../../types/redux/state";

import styles from "./styles.scss";

interface ForgotPasswordBodyProps {
	onChangeModalContent: (state: ModalContentState) => void;
	authIsProcessing: boolean;
	sendForgotPasswordEmail: (username: string) => void;
}

interface ForgotPasswordBodyState {
	email: string;
	emailIsInvalid: boolean;
}

class ForgotPasswordBody extends React.PureComponent<
	ForgotPasswordBodyProps,
	ForgotPasswordBodyState
> {
	state = {
		email: "",
		emailIsInvalid: false,
	};

	onSendClicked = (): void => {
		const { sendForgotPasswordEmail } = this.props;
		const { email, emailIsInvalid } = this.state;

		if (!emailIsInvalid) sendForgotPasswordEmail(email);
	};

	validateEmail = (): void => {
		const { email } = this.state;
		this.setState({ emailIsInvalid: !validator.isEmail(email) });
	};

	render(): JSX.Element {
		const { onChangeModalContent, authIsProcessing } = this.props;
		const { email, emailIsInvalid } = this.state;

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

	return {
		authIsProcessing,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		sendForgotPasswordEmail: (username: string) =>
			dispatch(onSendForgotPasswordRequested(username)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordBody);
