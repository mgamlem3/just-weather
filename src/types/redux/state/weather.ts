/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export interface WeatherState {
	location?: string | null;
	forecast?: WeatherForecast | null;
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
	cloudPercent: number;
	dewPoint: number;
	feelsLike: number;
	humidity: number;
	pressure: number;
	sunrise: Date;
	sunset: Date;
	temp: number;
	uvIndex: number;
	visibility: number;
	weather: WeatherDescription[];
	windDegrees: number;
	windGust: number;
	windSpeed: number;
}

export interface WeatherDescription {
	description: string;
	mainIcon: string;
}

export interface WeatherDto {
	current: WeatherForecast;
	daily: WeatherForecast[];
	hourly: WeatherForecast[];
	lat: number;
	lon: number;
	timezone: string;
	timezoneOffset: number;
}
