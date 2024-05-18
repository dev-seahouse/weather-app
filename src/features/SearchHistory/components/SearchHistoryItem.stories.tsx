import {
  SearchHistoryItem,
} from "@/features/SearchHistory/components/SearchHistoryItem";
import type {
  SearchHistoryItem as SearchHistoryItemType,
} from "@/stores/weather/slices/searchHistorySlice.types";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";

const exampleHistoryItem: SearchHistoryItemType = {
  id: "1",
  locationInfo: {
    longitude: 103.851959,
    latitude: 1.29027,
    countryCode: "SG",
    regionName: "Singapore",
  },
  timeStamp: new Date().toISOString(),
};

const meta = {
  title: "Features/SearchHistory/components/SearchHistoryItem",
  component: SearchHistoryItem,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "theme",
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
} satisfies Meta<typeof SearchHistoryItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    history: exampleHistoryItem,
  },
};
