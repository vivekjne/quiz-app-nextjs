import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";

import Sidebar, { SidebarProps } from "../../components/layout/Sidebar";

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: null,
};
