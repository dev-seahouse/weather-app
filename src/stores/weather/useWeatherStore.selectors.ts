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

export const useAddSearchHistory = () => {
  return useWeatherStore(state => state.searchHistory.addSearchHistory);
};

export const useGetSearchHistories = () => {
  return useWeatherStore(state => state.searchHistory.data);
};

export const useDeleteSearchHistory = () => {
  return useWeatherStore(state => state.searchHistory.deleteHistory);
};
