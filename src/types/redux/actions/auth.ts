/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface AuthAction {
	type: string;
	user?: string;
	error?: string | undefined;
}

export enum SignInActionTypes {
	Processing = "SIGN_IN_PROCESSING",
	Success = "SIGN_IN_SUCCESS",
	Failed = "SIGN_IN_FAILED",
}
