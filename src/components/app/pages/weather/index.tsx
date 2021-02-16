/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

import CurrentWeatherCard from "../../../current-weather-card";
import ExtendedForecast from "../../../extended-forecast";
import WeatherAlertBanner from "../../../weather-alert-banner";
import { Map, MapStyles } from "../../../map";
import Page from "../page";

import {
	selectCoordinates,
	selectLocation,
} from "../../../../redux/selectors/weather";
import { State } from "../../../../types/redux/state";

import styles from "./styles.scss";

interface WeatherProps {
	location: string;
	coordinates: { lat?: number; lon?: number };
}

class Weather extends React.PureComponent<WeatherProps> {
	render(): JSX.Element {
		const { coordinates, location } = this.props;

		return (
			<Page>
				<div className={styles.weatherPage}>
					<h1 className={styles.location}>{location}</h1>
					<WeatherAlertBanner />
					<div className={styles.topSection}>
						<div className={styles.map}>
							{!coordinates.lat || !coordinates.lon ? (
								<Spinner animation='border' variant='primary' />
							) : (
								<Map
									mapStyle={MapStyles.Base}
									lat={coordinates.lat}
									lon={coordinates.lon}
									zoom={12}
								/>
							)}
						</div>
						<CurrentWeatherCard />
					</div>
					<ExtendedForecast />
				</div>
			</Page>
		);
	}
}

const mapStateToProps = (state: State) => {
	const location = selectLocation(state);
	const coordinates = selectCoordinates(state);

	return {
		location,
		coordinates,
	};
};

export default connect(mapStateToProps, null)(Weather);
