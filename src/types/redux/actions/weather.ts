/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface WeatherAction {
	type: string;
	search?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	result?: any;
	error?: string | undefined;
}

export enum SearchActionTypes {
	Processing = "SEARCH_PROCESSING",
	Success = "SEARCH_SUCCESS",
	Failed = "SEARCH_FAILED",
}
