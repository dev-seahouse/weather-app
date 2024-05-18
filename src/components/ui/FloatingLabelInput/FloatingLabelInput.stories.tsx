import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput/FloatingLabelInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/FloatingLabelInput",
  component: FloatingLabelInput,
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
} satisfies Meta<typeof FloatingLabelInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Country",
  },
};
