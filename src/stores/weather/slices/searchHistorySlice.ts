import { nanoid } from "nanoid"; // To generate unique IDs

import type {
  LocationInfo,
} from "@/stores/weather/slices/currentWeatherSlice.types";
import type {
  SearchHistoryItem,
  SearchHistorySlice,
} from "@/stores/weather/slices/searchHistorySlice.types";
import {
  type WeatherStoreStateCreator,
} from "@/stores/weather/useWeatherStore";

export const searchHistorySlice: WeatherStoreStateCreator<
  SearchHistorySlice
> = (set, get) => ({
  searchHistory: {
    data: [],

    addSearchHistory(locationInfo: LocationInfo) {
      const newHistoryItem: SearchHistoryItem = {
        id: nanoid(),
        locationInfo,
        timeStamp: new Date().toISOString(),
      };

      set(state => ({
        searchHistory: {
          ...state.searchHistory,
          data: [newHistoryItem, ...state.searchHistory.data],
        },
      }));
    },

    deleteHistory(id: string) {
      set(state => ({
        searchHistory: {
          ...state.searchHistory,
          data: state.searchHistory.data.filter(item => item.id !== id),
        },
      }));
    },

    getSearchHistories() {
      return get().searchHistory.data;
    },
  },
});
