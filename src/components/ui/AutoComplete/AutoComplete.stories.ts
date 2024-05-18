import { AutoComplete } from "@/components/ui/AutoComplete/AutoComplete";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/AutoComplete",
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fetchSuggestions: () => Promise.resolve([]),
    onOptionSelected: () => console.log(),
    label: "Country",
  },
};

export default meta;
