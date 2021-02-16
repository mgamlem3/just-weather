/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import moment from "moment";

import WeatherIcon from "../weather-icon";

import { ForecastTypes } from "../extended-forecast";
import { WeatherForecast } from "../../types/redux/state/weather";

import styles from "./styles.scss";
import { useSelector } from "react-redux";
import { selectCurrentTemperatureUnit } from "../../redux/selectors/app";
import { getTemperatureByUnit } from "../../helpers/temperature";

interface ForecastCardProps {
	forecast: WeatherForecast;
	type: ForecastTypes;
}

const ForecastCard = ({ forecast, type }: ForecastCardProps): JSX.Element => {
	const unit = useSelector(selectCurrentTemperatureUnit);

	return (
		<div className={styles.forecastCard}>
			<div>{getTime(forecast.dt, type)}</div>
			<WeatherIcon
				weatherCode={forecast.weather[0].id}
				iconCode={forecast.weather[0].mainIcon}
			/>
			<div>{forecast.weather[0].description}</div>
			<div>
				{getTemperatureByUnit(forecast.temp, unit)}°{unit}
			</div>
		</div>
	);
};

const getTime = (dt: number, type: ForecastTypes): string => {
	if (type === ForecastTypes.Daily)
		return moment.unix(dt).format("ddd.[\n]Do");
	else return moment.unix(dt).format("ddd.[\n]h:mm a");
};

export default ForecastCard;
