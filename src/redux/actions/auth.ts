/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Dispatch } from "@reduxjs/toolkit";
import { AuthAction, SignInActionTypes } from "../../types/redux/actions/auth";

export const onSignInRequested = (): any => {
	return (dispatch: Dispatch) => {
		dispatch({ type: SignInActionTypes.Processing });
		setTimeout(() => dispatch({ type: SignInActionTypes.Success }), 2000);
	};
};

export const onSignInSucceeded = (user: string): AuthAction => {
	return { type: SignInActionTypes.Success, user };
};

export const onSignInErrored = (error: string): AuthAction => {
	return { type: SignInActionTypes.Failed, error };
};
