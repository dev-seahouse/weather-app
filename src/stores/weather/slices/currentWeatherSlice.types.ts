export interface LocationInfo {
  longitude: number;
  latitude: number;
  countryCode: string;
  regionName: string;
}

export interface WeatherInfo {
  temperatureF: number;
  weather: string;
  weatherCode: number;
  humidity: number;
}

export interface CurrentWeatherState {
  locationInfo: LocationInfo;
  weatherInfo: WeatherInfo;
  timeStamp: string; // date when weather info is retrieved
}

export interface CurrentWeatherActions {
  setLocationInfo: (locationInfo: LocationInfo) => void;
}

export interface CurrentWeatherSlice {
  currentWeather: CurrentWeatherState & CurrentWeatherActions;
}
