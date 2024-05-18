import { Button } from "@/components/ui/Button/Button";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
