/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";
import { AuthAction, SignInActionTypes } from "../../types/redux/actions/auth";

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
