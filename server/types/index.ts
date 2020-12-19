/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface CurrentWeatherResponse {
	status: number;
	data?: JSON;
	message?: string;
}

export interface GeocodedLocationResponse {
	status: number;
	lat?: number;
	lon?: number;
	message?: string;
}
