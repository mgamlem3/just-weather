/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { changeTemperatureUnit } from "../../redux/actions/app";
import {
	selectCurrentWeather,
	selectWeatherIsProcessing,
} from "../../redux/selectors/weather";
import { getTemperatureByUnit } from "../../helpers/conversions";
import { State } from "../../types/redux/state";
import { WeatherForecast } from "../../types/redux/state/weather";
import WeatherIcon from "../weather-icon";

import styles from "./styles.scss";
import { selectCurrentTemperatureUnit } from "../../redux/selectors/app";

type CurrentWeatherCardProps = Props & ReduxProps;

interface Props {
	setTemperatureUnit: (unit: string) => void;
}

interface ReduxProps {
	currentForecast?: WeatherForecast;
	isProcessing: boolean;
	temperatureUnit: string;
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

	render(): JSX.Element {
		const {
			currentForecast,
			isProcessing,
			temperatureUnit,
			setTemperatureUnit,
		} = this.props;

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
							{getTemperatureByUnit(
								currentForecast?.temp,
								temperatureUnit,
							)}{" "}
							°{temperatureUnit}
						</div>
						<div className={styles.unitsContainer}>
							<Button
								variant='link'
								onClick={() => setTemperatureUnit("C")}
								style={{ color: "white" }}
							>
								°C
							</Button>
							|
							<Button
								variant='link'
								onClick={() => setTemperatureUnit("F")}
								style={{ color: "white" }}
							>
								°F
							</Button>
							|
							<Button
								variant='link'
								onClick={() => setTemperatureUnit("K")}
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
	const temperatureUnit = selectCurrentTemperatureUnit(state);

	return {
		currentForecast,
		isProcessing,
		temperatureUnit,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		setTemperatureUnit: (unit: string) =>
			dispatch(changeTemperatureUnit(unit)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherCard);
