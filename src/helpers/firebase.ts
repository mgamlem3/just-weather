/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase";

export const updateTemperatureUnit = (userId: string, unit: string): void => {
	const db = firebase.firestore();
	db.collection(PREFERENCES)
		.doc(userId)
		.set({
			temperatureUnit: unit,
		})
		.then(() => {
			console.log("Document written");
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
};

export const getTemperatureUnit = async (
	userId: string,
): Promise<string | null> => {
	let unit = null;
	const db = firebase.firestore();
	await db
		.collection(PREFERENCES)
		.doc(userId)
		.get()
		.then((doc) => {
			if (doc.exists) {
				unit = doc.data()?.temperatureUnit;
			} else {
				console.log("No such document!");
			}
		})
		.catch((error) => {
			console.log("Error getting document:", error);
		});
	return unit;
};

const PREFERENCES = "preferences";
