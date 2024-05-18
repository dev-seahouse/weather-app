import type { WeatherStoreStateCreator } from "@/stores/weather/useWeatherStore";

export interface CurrentWeatherState {
  longitude: number;
  latitude: number;
  countryCode: string; // 2 letters
  regionName: string; // e.g Johor
  temperatureF: number; // temp in fahrenheit
  weather: string; // e.g Rain
  weatherCode: number;
  humidity: number;
  timeStamp: string; // date when weather info is retrieved
}

export interface CurrentWeatherActions {}

export interface CurrentWeatherSlice {
  currentWeather: CurrentWeatherState & CurrentWeatherActions;
}

export const currentWeatherSlice: WeatherStoreStateCreator<
  CurrentWeatherSlice
> = set => ({
  currentWeather: {
    longitude: 0,
    latitude: 0,
    countryCode: "",
    regionName: "",
    temperatureF: 0,
    weather: "",
    weatherCode: 0,
    humidity: 0,
    timeStamp: "",
  },
});
