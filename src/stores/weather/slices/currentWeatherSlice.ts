import type {
  CurrentWeatherSlice,
  LocationInfo,
} from "@/stores/weather/slices/currentWeatherSlice.types";
import type { WeatherStoreStateCreator } from "@/stores/weather/useWeatherStore";

export const currentWeatherSlice: WeatherStoreStateCreator<
  CurrentWeatherSlice
> = set => ({
  currentWeather: {
    locationInfo: {
      longitude: 0,
      latitude: 0,
      countryCode: "",
      regionName: "",
    },
    weatherInfo: {
      temperatureF: 0,
      weather: "",
      weatherCode: 0,
      humidity: 0,
    },
    timeStamp: "",
    setLocationInfo(locationInfo: LocationInfo) {
      set(state => ({
        currentWeather: {
          ...state.currentWeather,
          locationInfo: locationInfo,
        },
      }));
    },
  },
});
