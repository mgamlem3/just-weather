/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { AuthState, InitialAuthState } from "../../types/redux/state/auth";
import {
	AuthAction,
	SignInActionTypes,
	SignInWithGoogleActionTypes,
} from "../../types/redux/actions/auth";

export const authReducer = (
	state: AuthState = InitialAuthState,
	action: AuthAction,
): AuthState => {
	switch (action.type) {
		case SignInActionTypes.Processing:
			return {
				...state,
				isProcessing: true,
			};
		case SignInActionTypes.Success:
			return {
				...state,
				isProcessing: false,
				user: {
					id: action.user?.uid,
					displayName: action.user?.displayName,
					photoURL: action.user?.photoURL,
				},
			};
		case SignInActionTypes.Failed:
			return {
				...state,
				isProcessing: false,
				user: null,
				error: action.error,
			};
		case SignInWithGoogleActionTypes.Processing:
			return {
				...state,
				isProcessing: true,
			};
		case SignInWithGoogleActionTypes.Success:
			return {
				...state,
				isProcessing: false,
				user: {
					id: action.user?.uid,
					displayName: action.user?.displayName,
					photoURL: action.user?.photoURL,
				},
			};
		case SignInWithGoogleActionTypes.Failed:
			return {
				...state,
				isProcessing: false,
				error: action.error,
			};
		default:
			return state;
	}
};
