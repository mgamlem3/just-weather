/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";

import { State } from "../../types/redux/state";

export const selectCurrentUser = (
	state: State,
): firebase.auth.UserCredential | null | undefined => state.auth.user;

export const selectAuthProcessing = (state: State): boolean =>
	state.auth.isProcessing;

export const selectAuthError = (state: State): string | undefined =>
	state.auth?.error;
