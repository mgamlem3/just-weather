/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface AuthState {
	user: User | null | undefined;
	isProcessing: boolean;
	error?: string;
}

export const InitialAuthState = {
	user: undefined,
	isProcessing: false,
};

export interface User {
	id: string | null | undefined;
	displayName: string | null | undefined;
	photoURL?: string | null | undefined;
}
