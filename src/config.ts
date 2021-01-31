/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

const env = process.env.NODE_ENV || "development";

export const baseURL =
	env === "production"
		? "https://justweather.mgamlem3.com"
		: "http://localhost:3002";
