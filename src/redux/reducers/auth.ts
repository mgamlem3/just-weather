/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { AuthState, InitialAuthState } from "../../types/redux/state/auth";
import { AuthAction, SignInActionTypes } from "../../types/redux/actions/auth";

export const authReducer = (
	state: AuthState = InitialAuthState,
	action: AuthAction,
): AuthState => {
	switch (action.type) {
		case SignInActionTypes.Processing:
			return {
				...state,
				user: "Processing",
			};
		case SignInActionTypes.Success:
			return {
				...state,
				user: "michael",
				// user: action?.user ?? "",
			};
		case SignInActionTypes.Failed:
			return {
				...state,
				user: "none",
				error: action.error,
			};
		default:
			return state;
	}
};
