import { mergician } from "mergician";
import {
  create,
  type StateCreator,
} from "zustand";
import {
  createJSONStorage,
  devtools,
  persist,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import {
  currentWeatherSlice,
} from "@/stores/weather/slices/currentWeatherSlice";
import type {
  CurrentWeatherSlice,
} from "@/stores/weather/slices/currentWeatherSlice.types";
import { searchHistorySlice } from "@/stores/weather/slices/searchHistorySlice";
import type {
  SearchHistorySlice,
} from "@/stores/weather/slices/searchHistorySlice.types";

export type WeatherStoreState = CurrentWeatherSlice & SearchHistorySlice;
export type WeatherStoreStateCreator<T> = StateCreator<
  WeatherStoreState,
  [["zustand/devtools", never]],
  [],
  T
>;
export const useWeatherStore = create<WeatherStoreState>()(
  devtools(
    persist(
      immer((...a) => ({
        ...currentWeatherSlice(...a),
        ...searchHistorySlice(...a),
      })),
      {
        name: `${window.location.host}:weather-storage-1`,
        storage: createJSONStorage(() => sessionStorage),
        merge: (
          persistentState: unknown,
          currState: WeatherStoreState,
        ): WeatherStoreState => {
          const mergedState = mergician(
            currState,
            persistentState as WeatherStoreState,
          );
          return {
            ...currState,
            ...mergedState,
          };
        },
      },
    ),
    {
      name: "Weather store 1",
    },
  ),
);
