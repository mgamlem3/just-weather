/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import {
	selectDailyForecast,
	selectHourlyForecast,
} from "../../redux/selectors/weather";
import { State } from "../../types/redux/state";
import { WeatherForecast } from "../../types/redux/state/weather";
import ForecastCard from "../forecast-card";

import styles from "./styles.scss";

type ExtendedForecastProps = Record<string, never> & ReduxProps;

interface ReduxProps {
	hourlyForecast?: WeatherForecast[];
	dailyForecast?: WeatherForecast[];
}

interface ExtendedForecastState {
	selectedForecast: ForecastTypes;
}

export enum ForecastTypes {
	Hourly = "HOURLY",
	Daily = "DAILY",
}

class ExtendedForecast extends React.PureComponent<
	ExtendedForecastProps,
	ExtendedForecastState
> {
	state = {
		selectedForecast: ForecastTypes.Daily,
	};

	onToggle = (value: string) => {
		if (value === ForecastTypes.Hourly)
			this.setState({ selectedForecast: ForecastTypes.Hourly });
		else this.setState({ selectedForecast: ForecastTypes.Daily });
	};

	render(): JSX.Element {
		const { hourlyForecast, dailyForecast } = this.props;
		const { selectedForecast } = this.state;

		return (
			<div className={styles.extendedForecast}>
				<ToggleButtonGroup
					className={styles.buttons}
					name='forecast'
					type='radio'
					value={selectedForecast}
					onChange={this.onToggle}
				>
					<ToggleButton value={ForecastTypes.Hourly}>
						Hourly
					</ToggleButton>
					<ToggleButton value={ForecastTypes.Daily}>
						Daily
					</ToggleButton>
				</ToggleButtonGroup>
				<div className={styles.forecastRow}>
					{selectedForecast === ForecastTypes.Hourly
						? hourlyForecast?.map((forecast, index) => {
								return (
									<ForecastCard
										key={index}
										forecast={forecast}
										type={selectedForecast}
									/>
								);
						  })
						: dailyForecast?.map((forecast, index) => {
								return (
									<ForecastCard
										key={index}
										forecast={forecast}
										type={selectedForecast}
									/>
								);
						  })}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: State): ReduxProps => {
	const hourlyForecast = selectHourlyForecast(state);
	const dailyForecast = selectDailyForecast(state);

	return {
		hourlyForecast,
		dailyForecast,
	};
};

export default connect(mapStateToProps, null)(ExtendedForecast);
