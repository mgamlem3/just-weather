/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import mapboxgl from "mapbox-gl";

interface MapProps {
	mapStyle: MapStyles;
}

interface MapState {
	loading: boolean;
	lng: number;
	lat: number;
	zoom: number;
}

export enum MapStyles {
	Base,
	Dark,
}

const mapboxStyleURLs = {
	base: "mapbox://styles/mgamlem3/ckiwkumsc028y19r2xfds77or",
	dark: "mapbox://styles/mgamlem3/ckiwlqw3u034d19rrz7t3eehk",
};

export default class Map extends React.PureComponent<MapProps, MapState> {
	state = {
		loading: true,
		lng: 1,
		lat: 1,
		zoom: 12,
	};

	mapContainer: HTMLElement | string;
	map: mapboxgl.Map;

	componentDidMount(): void {
		navigator.geolocation.getCurrentPosition((location) => {
			this.setState(
				{
					lng: location.coords.longitude,
					lat: location.coords.latitude,
				},
				this.initializeMap,
			);
		});
	}

	initializeMap = (): void => {
		const { mapStyle } = this.props;

		mapboxgl.accessToken =
			"pk.eyJ1IjoibWdhbWxlbTMiLCJhIjoiY2tpczQ4emk4MDB6bTMzcDUxa2tlb2ZsZCJ9.w4tlyyqF3TphHhq9b1gmlg";
		const { lng, lat, zoom } = this.state;

		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			style:
				mapStyle === MapStyles.Base
					? mapboxStyleURLs.base
					: mapboxStyleURLs.dark,
			center: [lng, lat],
			zoom: zoom,
		});
	};

	render(): JSX.Element {
		return (
			<div style={{ height: 1000, width: 1000 }}>
				<div
					ref={(el) => (this.mapContainer = el || "")}
					style={{ height: 1000, width: 1000 }}
				/>
			</div>
		);
	}
}
