import { useWeatherStore } from "@/stores/weather/useWeatherStore";

export const useSelectLocationInfo = () => {
  return useWeatherStore(state => state.currentWeather.locationInfo);
};

export const useSetLocationInfo = () => {
  return useWeatherStore(state => state.currentWeather.setLocationInfo);
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
