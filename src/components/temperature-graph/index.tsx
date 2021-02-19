/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {
	LineChart,
	Line,
	Tooltip,
	XAxis,
	YAxis,
	ResponsiveContainer,
} from "recharts";
import { Dropdown } from "react-bootstrap";

import { getTemperatureByUnit } from "../../helpers/conversions";
import { selectCurrentTemperatureUnit } from "../../redux/selectors/app";

import { selectHourlyForecast } from "../../redux/selectors/weather";
import { WeatherForecast } from "../../types/redux/state/weather";

import styles from "./styles.scss";

interface Data {
	label: string;
	value: number;
}

const TemperatureGraph: React.FunctionComponent = (): JSX.Element => {
	const hourlyForecast = useSelector(selectHourlyForecast);
	const unit = useSelector(selectCurrentTemperatureUnit);
	const [numPoints, setNumPoints] = useState(12);

	return (
		<div className={styles.temperatureGraph}>
			<h3>Temperature</h3>
			<ResponsiveContainer height={400} width={"100%"}>
				<LineChart data={getChartData(hourlyForecast, unit, numPoints)}>
					<Line
						type='monotone'
						dataKey='value'
						stroke='#3f51b5'
						activeDot={{ r: 8 }}
					/>
					<Tooltip />
					<XAxis dataKey='label' interval={"preserveStart"} />
					<YAxis domain={["dataMin - 5", "dataMax + 5"]} />
				</LineChart>
			</ResponsiveContainer>
			<Dropdown style={{ textAlign: "end" }}>
				<Dropdown.Toggle>{numPoints} hrs</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onSelect={() => setNumPoints(12)}>
						12 hrs
					</Dropdown.Item>
					<Dropdown.Item onSelect={() => setNumPoints(24)}>
						24 hrs
					</Dropdown.Item>
					<Dropdown.Item onSelect={() => setNumPoints(36)}>
						36 hrs
					</Dropdown.Item>
					<Dropdown.Item onSelect={() => setNumPoints(48)}>
						48 hrs
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

const getChartData = (
	hourlyForecast: WeatherForecast[] | undefined,
	unit: string,
	limit: number,
): Data[] | undefined => {
	return hourlyForecast
		?.map((forecast) => {
			return {
				label: moment.unix(forecast.dt).format("ddd. h a"),
				value: getTemperatureByUnit(forecast.temp, unit),
			};
		})
		.slice(0, limit);
};

export default TemperatureGraph;
