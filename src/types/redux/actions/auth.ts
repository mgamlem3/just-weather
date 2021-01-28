/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";

export interface AuthAction {
	type: string;
	user?: firebase.User;
	username?: string;
	password?: string;
	error?: string | undefined;
}

export enum SignInActionTypes {
	Processing = "SIGN_IN_PROCESSING",
	Success = "SIGN_IN_SUCCESS",
	Failed = "SIGN_IN_FAILED",
}

export enum SignInWithGoogleActionTypes {
	Processing = "SIGN_IN_WITH_GOOGLE_PROCESSING",
	Success = "SIGN_IN_WITH_GOOGLE_SUCCESS",
	Failed = "SIGN_IN_WITH_GOOGLE_FAILED",
}
