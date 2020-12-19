/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import axios from "axios";
import { GeocodedLocationResponse } from "../../types";

export const getGeocodedLocation = async (
	location: string,
): Promise<GeocodedLocationResponse> => {
	const res: GeocodedLocationResponse = { status: 200 };
	await axios
		.get(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.replace(
				" ",
				"+",
			)}.json?access_token=${process.env.MAP_KEY}`,
		)
		.then((response) => {
			res.lon = response.data.features[0].geometry.coordinates[0];
			res.lat = response.data.features[0].geometry.coordinates[1];
		})
		.catch((error) => {
			console.error(error);
			res.status = 500;
			res.message = "Internal error";
		});

	return res;
};
