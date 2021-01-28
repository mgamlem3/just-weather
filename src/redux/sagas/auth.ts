/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";
import { put, all, takeLatest } from "redux-saga/effects";

import {
	AuthAction,
	SignInActionTypes,
	SignInWithGoogleActionTypes,
} from "../../types/redux/actions/auth";

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
		const result = yield signInUser(action.username, action.password);

		if (result instanceof Error)
			yield put({ type: SignInActionTypes.Failed, error: result });
		else yield put({ type: SignInActionTypes.Success, user: result.user });
	}
}

function* signInWithGoogleWatcher() {
	yield takeLatest(
		SignInWithGoogleActionTypes.Processing,
		signInWithGoogleWorker,
	);
}

function* signInWithGoogleWorker() {
	const result = yield signInWithGoogle();

	if (result instanceof Error) {
		yield put({ type: SignInWithGoogleActionTypes.Failed, error: result });
	} else {
		yield put({ type: SignInWithGoogleActionTypes.Success, user: result });
	}
}

const signInUser = async (
	username: string,
	password: string,
): Promise<firebase.auth.UserCredential | Error> => {
	const result = await firebase
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

const signInWithGoogle = async (): Promise<
	firebase.auth.UserCredential | Error
> => {
	const provider = new firebase.auth.GoogleAuthProvider();

	const result = await firebase
		.auth()
		.signInWithPopup(provider)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			return new Error(error.message);
		});

	return result;
};

export default function* startAuthSaga(): unknown {
	yield all([signInWatcher(), signInWithGoogleWatcher()]);
}
