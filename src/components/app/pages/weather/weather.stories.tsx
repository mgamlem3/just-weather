/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import Weather from "./index";

export default {
	title: "Pages/Weather",
	component: Weather,
};

const Template: Story<ComponentProps<typeof Weather>> = (args) => (
	<Weather {...args} />
);

export const Default = Template.bind({});
Default.args = {};
