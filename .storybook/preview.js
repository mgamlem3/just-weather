/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import "../src/styles/base.scss";

addDecorator((story) => (
	<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
};
