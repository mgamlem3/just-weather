/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";

export interface AuthAction {
	type: string;
	user?: firebase.auth.UserCredential;
	username?: string;
	password?: string;
	error?: string | undefined;
}

export enum CreateUserActionTypes {
	Processing = "CREATE_USER_PROCESSING",
	Success = "CREATE_USER_SUCCESS",
	Failed = "CREATE_USER_FAILED",
}

export enum SendForgotPasswordActionTypes {
	Processing = "SEND_FORGOT_PASSWORD_PROCESSING",
	Success = "SEND_FORGOT_PASSWORD_SUCCESS",
	Failed = "SEND_FORGOT_PASSWORD_FAILED",
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

export enum SignOutActionTypes {
	Processing = "SIGN_OUT_PROCESSING",
	Success = "SIGN_OUT_SUCCESS",
	Failed = "SIGN_OUT_FAILED",
}
