/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { AuthState, InitialAuthState } from "../../types/redux/state/auth";
import {
	AuthAction,
	CreateUserActionTypes,
	SendForgotPasswordActionTypes,
	SignInActionTypes,
	SignInWithGoogleActionTypes,
	SignOutActionTypes,
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
				signInSuccess: undefined,
				error: undefined,
			};
		case SignInActionTypes.Success:
			return {
				...state,
				isProcessing: false,
				user: action.user,
				signInSuccess: true,
			};
		case SignInActionTypes.Failed:
			return {
				...state,
				isProcessing: false,
				user: null,
				signInSuccess: false,
				error: action.error,
			};
		case SignInWithGoogleActionTypes.Processing:
			return {
				...state,
				isProcessing: true,
				signInSuccess: undefined,
				error: undefined,
			};
		case SignInWithGoogleActionTypes.Success:
			return {
				...state,
				isProcessing: false,
				signInSuccess: true,
				user: action.user,
			};
		case SignInWithGoogleActionTypes.Failed:
			return {
				...state,
				isProcessing: false,
				signInSuccess: false,
				error: action.error,
			};
		case SignOutActionTypes.Processing:
			return {
				...state,
				isProcessing: true,
				error: undefined,
			};
		case SignOutActionTypes.Success:
			return {
				...state,
				user: null,
				isProcessing: false,
			};
		case SignOutActionTypes.Failed:
			return {
				...state,
				user: null,
				isProcessing: false,
			};
		case CreateUserActionTypes.Processing:
			return {
				...state,
				isProcessing: true,
				signUpSuccess: undefined,
				error: undefined,
			};
		case CreateUserActionTypes.Success:
			return {
				...state,
				isProcessing: false,
				signUpSuccess: true,
				user: action.user,
			};
		case CreateUserActionTypes.Failed:
			return {
				...state,
				isProcessing: false,
				signUpSuccess: false,
				error: action.error,
			};
		case SendForgotPasswordActionTypes.Processing:
			return {
				...state,
				isProcessing: true,
				sendForgotPasswordEmailSuccess: undefined,
				error: undefined,
			};
		case SendForgotPasswordActionTypes.Success:
			return {
				...state,
				sendForgotPasswordEmailSuccess: true,
				isProcessing: false,
			};
		case SendForgotPasswordActionTypes.Failed:
			return {
				...state,
				isProcessing: false,
				sendForgotPasswordEmailSuccess: false,
				error: action.error,
			};
		default:
			return state;
	}
};
