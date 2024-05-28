import type {
  CurrentWeatherSlice,
  LocationInfo,
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
    timeStamp: "",
    setLocationInfo(locationInfo: LocationInfo) {
      set(state => {
        state.currentWeather.locationInfo = locationInfo;
        return state;
      });
    },
  },
});
