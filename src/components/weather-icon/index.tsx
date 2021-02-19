/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import {
	WiCloud,
	WiCloudy,
	WiDayCloudy,
	WiDaySunny,
	WiDust,
	WiFog,
	WiHail,
	WiNightAltCloudy,
	WiRain,
	WiRainMix,
	WiSandstorm,
	WiShowers,
	WiSleet,
	WiSmoke,
	WiSnow,
	WiStars,
	WiStrongWind,
	WiThunderstorm,
	WiTornado,
} from "react-icons/wi";

interface WeatherIconProps {
	weatherCode: number;
	iconCode: string;
}

const WeatherIcon = ({
	weatherCode,
	iconCode,
}: WeatherIconProps): JSX.Element => {
	return (
		<div>
			<div>{getIconForCode(weatherCode, iconCode)}</div>
		</div>
	);
};

const ICON_SIZE = 100;

const getIconForCode = (code: number, iconCode: string): JSX.Element => {
	switch (code) {
		case 200:
		case 201:
		case 202:
		case 210:
		case 211:
		case 212:
		case 221:
		case 230:
		case 231:
		case 232:
			return <WiThunderstorm size={ICON_SIZE} />;
		case 300:
		case 301:
		case 302:
		case 310:
		case 311:
		case 312:
		case 313:
		case 314:
		case 321:
			return <WiShowers size={ICON_SIZE} />;
		case 500:
		case 501:
		case 502:
		case 503:
		case 504:
		case 520:
		case 521:
		case 522:
		case 531:
			return <WiRain size={ICON_SIZE} />;
		case 511:
			return <WiHail size={ICON_SIZE} />;
		case 600:
		case 601:
		case 602:
		case 620:
		case 621:
		case 622:
			return <WiSnow size={ICON_SIZE} />;
		case 611:
		case 612:
		case 613:
			return <WiSleet size={ICON_SIZE} />;
		case 615:
		case 616:
			return <WiRainMix size={ICON_SIZE} />;
		case 701:
		case 741:
			return <WiFog size={ICON_SIZE} />;
		case 711:
		case 721:
			return <WiSmoke size={ICON_SIZE} />;
		case 731:
		case 751:
			return <WiSandstorm size={ICON_SIZE} />;
		case 761:
			return <WiDust size={ICON_SIZE} />;
		case 771:
			return <WiStrongWind size={ICON_SIZE} />;
		case 781:
			return <WiTornado size={ICON_SIZE} />;
		case 800: {
			if (iconCode?.endsWith("n")) return <WiStars size={ICON_SIZE} />;
			else return <WiDaySunny size={ICON_SIZE} />;
		}
		case 801:
		case 802: {
			if (iconCode?.endsWith("n"))
				return <WiNightAltCloudy size={ICON_SIZE} />;
			else return <WiDayCloudy size={ICON_SIZE} />;
		}
		case 803:
			return <WiCloud size={ICON_SIZE} />;
		case 804:
			return <WiCloudy size={ICON_SIZE} />;
		default:
			return <div />;
	}
};

export default WeatherIcon;
