import {
  create,
  type StateCreator,
} from "zustand";
import {
  devtools,
  persist,
} from "zustand/middleware";

import {
  currentWeatherSlice,
} from "@/stores/weather/slices/currentWeatherSlice";
import type {
  CurrentWeatherSlice,
} from "@/stores/weather/slices/currentWeatherSlice.types";

export type WeatherStoreState = CurrentWeatherSlice;

export type WeatherStoreStateCreator<T> = StateCreator<
  WeatherStoreState,
  [["zustand/devtools", never]],
  [],
  T
>;

export const useWeatherStore = create<WeatherStoreState>()(
  devtools(
    persist(
      (...a) => ({
        ...currentWeatherSlice(...a),
      }),
      {
        name: `${window.location.host}:weather-storage`,
      },
    ),
    {
      name: "Weather store",
    },
  ),
);
