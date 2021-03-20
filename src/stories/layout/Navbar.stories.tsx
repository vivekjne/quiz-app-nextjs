import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";

import Navbar, { NavbarProps } from "../../components/layout/Navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: null,
};
