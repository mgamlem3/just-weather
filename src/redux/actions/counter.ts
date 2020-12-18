/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
import { CounterActionTypes } from "../../types/redux/actions/counter";

export const increment = () => {
	return {
		type: CounterActionTypes.INCREMENT,
	};
};

export const decrement = () => {
	return {
		type: CounterActionTypes.DECREMENT,
	};
};

export const incrementByAmount = (amount: number) => {
	return {
		type: CounterActionTypes.INCREMENT_BY_AMOUNT,
		amount,
	};
};
