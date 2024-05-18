import { useWeatherStore } from "@/stores/weather/useWeatherStore";

export const useSelectWeatherInfo = () => {
  return useWeatherStore(state => state.currentWeather.weatherInfo);
};

export const useSelectLocationInfo = () => {
  return useWeatherStore(state => state.currentWeather.locationInfo);
};

export const useSetLocationInfo = () => {
  return useWeatherStore(state => state.currentWeather.setLocationInfo);
};

export const useSetWeatherInfo = () => {
  return useWeatherStore(state => state.currentWeather.setWeatherInfo);
};
