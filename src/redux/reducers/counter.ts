/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	CounterState,
	InitialCounterState,
} from "../../types/redux/state/counter";
import { CounterAction } from "../../types/redux/actions/counter";

export const counterReducer = (
	state: CounterState = InitialCounterState,
	action: CounterAction,
): CounterState => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				value: state.value + 1,
			};
		case "DECREMENT":
			return {
				...state,
				value: state.value - 1,
			};
		case "INCREMENT_BY_AMOUNT": {
			const value = action?.amount ?? 0;
			console.log("value: ", value);
			return {
				...state,
				value: state.value + value,
			};
		}
		default:
			return state;
	}
};
