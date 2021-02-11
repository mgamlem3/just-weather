/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import mapboxgl from "mapbox-gl";

interface MapProps {
	mapStyle: MapStyles;
	lon: number;
	lat: number;
	zoom: number;
}

interface MapState {
	lon: number;
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
		/* eslint-disable react/destructuring-assignment */
		lon: this.props.lon,
		lat: this.props.lat,
		zoom: this.props.zoom,
		/* eslint-enable react/destructuring-assignment */
	};

	mapContainer: HTMLElement | string;
	map: mapboxgl.Map;

	componentDidMount(): void {
		this.initializeMap();
	}

	componentDidUpdate(): void {
		const { lat, lon } = this.props;
		this.map.setCenter([lon, lat]);
	}

	initializeMap = (): void => {
		const { mapStyle } = this.props;

		mapboxgl.accessToken =
			"pk.eyJ1IjoibWdhbWxlbTMiLCJhIjoiY2tpczQ4emk4MDB6bTMzcDUxa2tlb2ZsZCJ9.w4tlyyqF3TphHhq9b1gmlg";
		const { lon, lat, zoom } = this.props;

		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			style:
				mapStyle === MapStyles.Base
					? mapboxStyleURLs.base
					: mapboxStyleURLs.dark,
			center: [lon, lat],
			zoom: zoom,
		});
	};

	render(): JSX.Element {
		return (
			<div
				style={{ height: "100%", width: "100%", position: "relative" }}
			>
				<div
					ref={(el) => (this.mapContainer = el || "")}
					style={{ height: "100%", width: "100%" }}
				/>
			</div>
		);
	}
}
