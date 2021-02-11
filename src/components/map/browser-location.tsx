/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState, useEffect } from "react";
import Map, { MapStyles } from "./base";

interface BrowserLocationMapProps {
	mapStyle: MapStyles;
}

export const BrowserLocationMap = ({
	mapStyle,
}: BrowserLocationMapProps): JSX.Element => {
	const [coordinates, setCoordinates] = useState({
		lon: -122.4787,
		lat: 48.7519,
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((location) => {
			setCoordinates({
				lon: location.coords.longitude,
				lat: location.coords.latitude,
			});
		});
	}, []);

	return (
		<Map
			mapStyle={mapStyle}
			lon={coordinates.lon}
			lat={coordinates.lat}
			zoom={12}
		/>
	);
};
