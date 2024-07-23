import type { Meta, StoryObj } from "@storybook/react";
import heroImage from "@/public/hero-image.jpg";

import Hero from "./Hero";

const meta: Meta = {
  title: "Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    image: heroImage,
  },
};
