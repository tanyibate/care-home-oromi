import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";

const meta = {
  title: "Components/Navbar",
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
    links: [
      { href: "#", label: "Home" },
      { href: "#", label: "About Us" },
      { href: "#", label: "Services" },
      { href: "#", label: "Facilities" },
      { href: "#", label: "Gallery" },
      { href: "#", label: "Testimonials" },
      { href: "#", label: "Donate" },
    ],
  },
};
