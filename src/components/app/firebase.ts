/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCYyzo5w_VPpq09BUI93nuU8Qf50LN1r9g",
	authDomain: "just-weather-eb627.firebaseapp.com",
	projectId: "just-weather-eb627",
	storageBucket: "just-weather-eb627.appspot.com",
	messagingSenderId: "141156503228",
	appId: "1:141156503228:web:8d4ed87051f87e06cf4ab9",
	measurementId: "G-QE1JGJZ3L6",
};

export const initializeFirebase = (): void => {
	firebase.initializeApp(firebaseConfig);
};
