/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";

export interface AuthState {
	user: firebase.auth.UserCredential | null | undefined;
	isProcessing: boolean;
	error?: string;
}

export const InitialAuthState = {
	user: null,
	isProcessing: false,
};
