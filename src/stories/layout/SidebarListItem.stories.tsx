import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";

import SidebarListItem, {
  SidebarListItemProps,
} from "../../components/layout/SidebarListItem";
import {
  faBars,
  faUser,
  faChevronDown,
  faChevronRight,
  faQuestionCircle,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
export default {
  title: "Layout/SidebarListItem",
  component: SidebarListItem,
} as Meta;

const Template: Story<SidebarListItemProps> = (args) => (
  <SidebarListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Menu Item",
  icon: faUser,
  href: "/menu",
  onClick: () => alert("clicked"),
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  label: "Menu Item",
  icon: faUser,
  href: "/menu",
  onClick: () => alert("clicked"),
  isActive: true,
};
