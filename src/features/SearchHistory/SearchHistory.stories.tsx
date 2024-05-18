import { SearchHistory } from "@/features/SearchHistory/SearchHistory";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";

const meta = {
  title: "Features/SearchHistory",
  component: SearchHistory,
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
} satisfies Meta<typeof SearchHistory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
