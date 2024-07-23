import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./OrnamentText";

const meta = {
  title: "Components/OrnamentText",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <p>Hello World</p>,
    color: "red",
    leftOrnament: true,
    rightOrnament: true,
  },
};
