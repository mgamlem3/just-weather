/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface CounterAction {
	type: string;
	amount?: number;
}

export enum CounterActionTypes {
	INCREMENT = "INCREMENT",
	DECREMENT = "DECREMENT",
	INCREMENT_BY_AMOUNT = "NCREMENT_BY_AMOUNT",
}
