export interface LocationInfo {
  longitude: number;
  latitude: number;
  countryCode: string;
  regionName: string;
}

export interface WeatherInfo {
  temperature: number;
  weather: string;
  weatherCode: number;
  humidity: number;
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
