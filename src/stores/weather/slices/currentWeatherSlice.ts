import type {
  CurrentWeatherSlice,
  LocationInfo,
  WeatherInfo,
} from "@/stores/weather/slices/currentWeatherSlice.types";
import type {
  WeatherStoreStateCreator,
} from "@/stores/weather/useWeatherStore";

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
      temperature: 0,
      weather: "",
      weatherCode: 0,
      humidity: 0,
      timeStamp: "",
    },
    timeStamp: "",
    setLocationInfo(locationInfo: LocationInfo) {
      set(state => {
        state.currentWeather.locationInfo = locationInfo;
        return state;
      });
    },
    setWeatherInfo(weatherInfo: WeatherInfo) {
      set(state => {
        state.currentWeather.weatherInfo = weatherInfo;
        return state;
      });
    },
  },
});
