/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import {
	selectCurrentWeather,
	selectWeatherIsProcessing,
} from "../../redux/selectors/weather";
import { State } from "../../types/redux/state";
import { WeatherForecast } from "../../types/redux/state/weather";
import WeatherIcon from "../weather-icon";

import styles from "./styles.scss";

// Record<string, never> works for no passed in props
type CurrentWeatherCardProps = Record<string, never> & ReduxProps;

interface ReduxProps {
	currentForecast?: WeatherForecast;
	isProcessing: boolean;
}

interface CurrentWeatherCardState {
	unit: string;
}

class CurrentWeatherCard extends React.PureComponent<
	CurrentWeatherCardProps,
	CurrentWeatherCardState
> {
	state = {
		unit: "F",
	};

	getCurrentTemperature = (): number => {
		const { currentForecast } = this.props;
		const { unit } = this.state;

		if (!currentForecast?.temp) return Number.MIN_SAFE_INTEGER;

		switch (unit) {
			case "K":
				return currentForecast?.temp;
			case "C":
				return currentForecast?.temp - 273.15;
			case "F":
				return currentForecast?.temp * (9 / 5) - 459.67;
		}

		return Number.MIN_SAFE_INTEGER;
	};

	render(): JSX.Element {
		const { currentForecast, isProcessing } = this.props;
		const { unit } = this.state;

		return (
			<div className={styles.currentWeatherCard}>
				<h3 className={styles.heading}>Currently</h3>
				{isProcessing ? (
					<div className={styles.spinnerContainer}>
						<Spinner animation='border' />
					</div>
				) : (
					<React.Fragment>
						<WeatherIcon
							weatherCode={currentForecast?.weather[0].id || 0}
							iconCode={
								currentForecast?.weather[0].mainIcon || ""
							}
						/>
						<div className={styles.description}>
							{currentForecast?.weather[0].description}
						</div>
						<div className={styles.temperature}>
							{Math.round(this.getCurrentTemperature())} °{unit}
						</div>
						<div className={styles.unitsContainer}>
							<Button
								variant='link'
								onClick={() => this.setState({ unit: "C" })}
								style={{ color: "white" }}
							>
								°C
							</Button>
							|
							<Button
								variant='link'
								onClick={() => this.setState({ unit: "F" })}
								style={{ color: "white" }}
							>
								°F
							</Button>
							|
							<Button
								variant='link'
								onClick={() => this.setState({ unit: "K" })}
								style={{ color: "white" }}
							>
								°K
							</Button>
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: State): ReduxProps => {
	const currentForecast = selectCurrentWeather(state);
	const isProcessing = selectWeatherIsProcessing(state);

	return {
		currentForecast,
		isProcessing,
	};
};

export default connect(mapStateToProps, null)(CurrentWeatherCard);
