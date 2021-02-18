/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { useSelector } from "react-redux";
import {
	WiBarometer,
	WiDayCloudyHigh,
	WiDaySunny,
	WiHumidity,
	WiRaindrop,
	WiStrongWind,
	WiThermometer,
} from "react-icons/wi";

import WindDirectionIcon from "../wind-direction-icon";

import {
	getTemperatureByUnit,
	getWindDirection,
	getWindMPH,
} from "../../helpers/conversions";
import { selectCurrentTemperatureUnit } from "../../redux/selectors/app";
import {
	selectCurrentWeather,
	selectWeatherIsProcessing,
} from "../../redux/selectors/weather";

import styles from "./styles.scss";
import { Spinner } from "react-bootstrap";

const CurrentWeatherDetails = (): JSX.Element => {
	const currentWeather = useSelector(selectCurrentWeather);
	const unit = useSelector(selectCurrentTemperatureUnit);
	const isProcessing = useSelector(selectWeatherIsProcessing);
	const ICON_SIZE = 30;

	return (
		<div className={styles.currentWeatherDetails}>
			{isProcessing || !currentWeather ? (
				<div className={styles.spinner}>
					<Spinner animation='border' />
				</div>
			) : (
				<React.Fragment>
					<div className={styles.column}>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiThermometer size={ICON_SIZE} />
								<div className={styles.label}>currently: </div>
							</div>
							<div className={styles.data}>
								{getTemperatureByUnit(
									currentWeather.temp,
									unit,
								)}
								°{unit}
							</div>
						</div>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiThermometer size={ICON_SIZE} />
								<div className={styles.label}>feels like: </div>
							</div>
							<div className={styles.data}>
								{getTemperatureByUnit(
									currentWeather.feels_like,
									unit,
								)}
								°{unit}
							</div>
						</div>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiBarometer size={ICON_SIZE} />
								<div className={styles.label}>pressure: </div>
							</div>
							<div className={styles.data}>
								{currentWeather.pressure} hPa
							</div>
						</div>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiHumidity size={ICON_SIZE} />
								<div className={styles.label}>humidity: </div>
							</div>
							<div className={styles.data}>
								{currentWeather.humidity}%
							</div>
						</div>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiRaindrop size={ICON_SIZE} />
								<div className={styles.label}>dew point: </div>
							</div>
							<div className={styles.data}>
								{getTemperatureByUnit(
									currentWeather.dew_point,
									unit,
								)}
								°{unit}
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiDaySunny size={ICON_SIZE} />
								<div className={styles.label}>uv index: </div>
							</div>
							<div className={styles.data}>
								{currentWeather.uvi}
							</div>
						</div>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiDayCloudyHigh size={ICON_SIZE} />
								<div className={styles.label}>
									cloud cover:{" "}
								</div>
							</div>
							<div className={styles.data}>
								{currentWeather.clouds}%
							</div>
						</div>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WiStrongWind size={ICON_SIZE} />
								<div className={styles.label}>wind speed: </div>
							</div>
							<div className={styles.data}>
								{getWindMPH(currentWeather.wind_speed)} mph
							</div>
						</div>
						<div className={styles.dataElement}>
							<div className={styles.labelAndIconContainer}>
								<WindDirectionIcon
									direction={getWindDirection(
										currentWeather.wind_deg,
									)}
									size={ICON_SIZE}
								/>
								<div className={styles.label}>
									wind direction:{" "}
								</div>
							</div>
							<div className={styles.data}>
								{getWindDirection(currentWeather.wind_deg)}
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default CurrentWeatherDetails;
