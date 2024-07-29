import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ServiceReviewCard from "./ServiceReviewCard";

const meta = {
  title: "Components/ServiceReviewCard",
  component: ServiceReviewCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
