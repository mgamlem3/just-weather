/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { connect } from "react-redux";
import { Alert, Modal } from "react-bootstrap";
import { BsExclamationCircle } from "react-icons/bs";

import SignInBody from "./sign-in-body";
import SignUpBody from "./sign-up-body";
import ForgotPasswordBody from "./forgot-password-body";
import { selectAuthError } from "../../redux/selectors/auth";
import { State } from "../../types/redux/state";

import styles from "./styles.scss";

type SignInModalProps = Props & MappedProps;

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

interface MappedProps {
	authError?: string;
}

interface SignInModalState {
	modalContent: ModalContentState;
}

export enum ModalContentState {
	SignIn = 0,
	SignUp = 1,
	ForgotPassword = 2,
}

class SignInModal extends React.PureComponent<
	SignInModalProps,
	SignInModalState
> {
	state = {
		modalContent: ModalContentState.SignIn,
	};

	onModalContentStateChange = (state: ModalContentState): void => {
		this.setState({ modalContent: state });
	};

	getModalTitle = (): string => {
		const { modalContent } = this.state;

		switch (modalContent) {
			case ModalContentState.ForgotPassword:
				return "Forgot password";
			case ModalContentState.SignUp:
				return "Sign up";
			case ModalContentState.SignIn:
			default:
				return "Sign in";
		}
	};

	renderModalContent = (): JSX.Element => {
		const { modalContent } = this.state;

		switch (modalContent) {
			case ModalContentState.ForgotPassword:
				return (
					<ForgotPasswordBody
						onChangeModalContent={this.onModalContentStateChange}
					/>
				);
			case ModalContentState.SignUp:
				return (
					<SignUpBody
						onChangeModalContent={this.onModalContentStateChange}
					/>
				);
			case ModalContentState.SignIn:
			default:
				return (
					<SignInBody
						onChangeModalContent={this.onModalContentStateChange}
					/>
				);
		}
	};

	render() {
		const { isOpen, onClose, authError } = this.props;

		return (
			<Modal show={isOpen} onHide={onClose}>
				<Modal.Header closeButton>
					<Modal.Title>{this.getModalTitle()}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{authError && (
						<Alert variant='danger'>
							<div className={styles.alertContent}>
								<BsExclamationCircle
									className={styles.alertIcon}
								/>
								Uh Oh. Something went wrong. Try again.
							</div>
						</Alert>
					)}
					{this.renderModalContent()}
				</Modal.Body>
			</Modal>
		);
	}
}

function mapStateToProps(state: State): MappedProps {
	const error = selectAuthError(state);

	return {
		authError: error,
	};
}

export default connect(mapStateToProps, null)(SignInModal);
