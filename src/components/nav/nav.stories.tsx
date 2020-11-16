/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import Nav from ".";

export default {
	title: "Nav",
	component: Nav,
};

const Template: Story<ComponentProps<typeof Nav>> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {};
