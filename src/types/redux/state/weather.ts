/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface WeatherState {
	location?: string | null;
	forecast?: WeatherDto | null;
	isProcessing: boolean;
	error?: string;
}

export const InitialWeatherState = {
	location: undefined,
	forecast: undefined,
	isProcessing: false,
};

export interface WeatherForecast {
	lat: number;
	lon: number;
	clouds: number;
	dew_point: number;
	feels_like: number;
	humidity: number;
	pressure: number;
	sunrise: Date;
	sunset: Date;
	temp: TemperatureInfo | number;
	uvi: number;
	visibility: number;
	weather: WeatherDescription[];
	wind_deg: number;
	windGust: number;
	wind_speed: number;
	dt: number;
}

export interface WeatherDescription {
	description: string;
	mainIcon: string;
	id: number;
}

export interface WeatherDto {
	current: WeatherForecast;
	daily: WeatherForecast[];
	hourly: WeatherForecast[];
	lat: number;
	lon: number;
	timezone: string;
	timezoneOffset: number;
	alerts?: WeatherAlert[];
}

export interface TemperatureInfo {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}

export interface WeatherAlert {
	sender_name: string;
	event: string;
	start: number;
	end: number;
	description: string;
}
