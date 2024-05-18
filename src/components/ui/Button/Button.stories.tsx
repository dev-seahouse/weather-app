import type {
  Meta,
  StoryObj,
} from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "white",
      values: [
        {
          name: "white",
          value: "#fff",
        },
        {
          name: "theme",
          value: "#6a44c8",
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    variant: {
      options: ["default", "destructive", "outline", "ghost", "link"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default button
export const Primary: Story = {
  args: {
    children: "Default Button",
    variant: "default",
  },
};
