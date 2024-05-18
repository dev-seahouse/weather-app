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
  timeStamp: string; // date when weather info is retrieved
}

export interface CurrentWeatherState {
  locationInfo: LocationInfo;
  weatherInfo: WeatherInfo;
}

export interface CurrentWeatherActions {
  setLocationInfo: (locationInfo: LocationInfo) => void;
  setWeatherInfo: (WeatherInfo: WeatherInfo) => void;
}

export interface CurrentWeatherSlice {
  currentWeather: CurrentWeatherState & CurrentWeatherActions;
}
