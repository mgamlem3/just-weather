/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";
import { put, all, takeLatest } from "redux-saga/effects";

import { AuthAction, SignInActionTypes } from "../../types/redux/actions/auth";

function* signInWatcher() {
	yield takeLatest(SignInActionTypes.Processing, signInWorker);
}

function* signInWorker(action: AuthAction) {
	if (!action.username || !action.password)
		yield put({
			type: SignInActionTypes.Failed,
			error: "Must include username and password",
		});
	else {
		const result = signInUser(action.username, action.password);

		if (result instanceof Error)
			yield put({ type: SignInActionTypes.Failed, error: result });
		else yield put({ type: SignInActionTypes.Success, user: result });
	}
}

const signInUser = (
	username: string,
	password: string,
): Promise<firebase.auth.UserCredential | Error> => {
	const result = firebase
		.auth()
		.signInWithEmailAndPassword(username, password)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			console.error(error);
			return new Error(error.message);
		});
	return result;
};

export default function* startAuthSaga(): unknown {
	yield all([signInWatcher()]);
}
