/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface AuthState {
	user: string;
	error?: string;
}

export const InitialAuthState = {
	user: "",
};
