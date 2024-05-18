import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

import type { CurrentWeatherSlice } from "@/stores/weather/slices/currentWeatherSlice";

import { currentWeatherSlice } from "./slices/currentWeatherSlice";

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
      (...action) => ({
        ...currentWeatherSlice(...action),
      }),
      {
        name: "Weather Store",
      },
    ),
  ),
);
