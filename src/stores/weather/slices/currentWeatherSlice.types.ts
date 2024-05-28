export interface LocationInfo {
  longitude: number;
  latitude: number;
  countryCode: string;
  regionName: string;
}

export interface CurrentWeatherState {
  locationInfo: LocationInfo;
}

export interface CurrentWeatherActions {
  setLocationInfo: (locationInfo: LocationInfo) => void;
}

export interface CurrentWeatherSlice {
  currentWeather: CurrentWeatherState & CurrentWeatherActions;
}
