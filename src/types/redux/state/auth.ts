/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";

export interface AuthState {
	user?: firebase.User | null;
	isProcessing: boolean;
	signInSuccess?: boolean;
	signUpSuccess?: boolean;
	sendForgotPasswordEmailSuccess?: boolean;
	error?: string;
}

export const InitialAuthState = {
	user: undefined,
	isProcessing: false,
};
