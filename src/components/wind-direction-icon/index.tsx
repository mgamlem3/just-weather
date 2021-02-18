/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import {
	WiDirectionDown,
	WiDirectionDownLeft,
	WiDirectionDownRight,
	WiDirectionLeft,
	WiDirectionRight,
	WiDirectionUp,
	WiDirectionUpLeft,
	WiDirectionUpRight,
} from "react-icons/wi";

interface WindDirectionIconProps {
	direction: string;
	size?: number;
}

const WindDirectionIcon = ({
	direction,
	size = 30,
}: WindDirectionIconProps): JSX.Element => {
	switch (direction) {
		case "N":
			return <WiDirectionDown size={size} />;
		case "NNE":
		case "NE":
		case "ENE":
			return <WiDirectionDownLeft size={size} />;
		case "E":
			return <WiDirectionLeft size={size} />;
		case "ESE":
		case "SE":
		case "SSE":
			return <WiDirectionUpLeft size={size} />;
		case "S":
			return <WiDirectionUp size={size} />;
		case "SSW":
		case "SW":
		case "WSW":
			return <WiDirectionUpRight size={size} />;
		case "W":
			return <WiDirectionRight size={size} />;
		case "WNW":
		case "NW":
		case "NNW":
			return <WiDirectionDownRight size={size} />;
		default:
			return <div />;
	}
};

export default WindDirectionIcon;
