/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";
import {
	AuthAction,
	SignInActionTypes,
	SignInWithGoogleActionTypes,
	SignOutActionTypes,
} from "../../types/redux/actions/auth";

export const onSignInRequested = (
	username: string,
	password: string,
): AuthAction => {
	return { type: SignInActionTypes.Processing, username, password };
};

export const onSignInSucceeded = (
	user: firebase.auth.UserCredential,
): AuthAction => {
	return {
		type: SignInActionTypes.Success,
		user,
	};
};

export const onSignInErrored = (error: string): AuthAction => {
	return { type: SignInActionTypes.Failed, error };
};

export const onSignInWithGoogleRequested = (): AuthAction => {
	return { type: SignInWithGoogleActionTypes.Processing };
};

export const onSignInWithGoogleSucceeded = (
	user: firebase.auth.UserCredential,
): AuthAction => {
	return { type: SignInWithGoogleActionTypes.Success, user };
};

export const onSignInWithGoogleErrored = (error: string): AuthAction => {
	return { type: SignInWithGoogleActionTypes.Failed, error };
};

export const onSignOutRequested = (): AuthAction => {
	return { type: SignOutActionTypes.Processing };
};

export const onSignOutSucceeded = (): AuthAction => {
	return {
		type: SignOutActionTypes.Success,
	};
};

export const onSignOutErrored = (error: string): AuthAction => {
	return { type: SignOutActionTypes.Failed, error };
};
