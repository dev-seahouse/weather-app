import { DisplayWeather } from "@/features/DisplayWeather/DisplayWeather";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "features/DisplayWeather",
  component: DisplayWeather,
  parameters: {
    layout: "padded",
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
} satisfies Meta<typeof DisplayWeather>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
