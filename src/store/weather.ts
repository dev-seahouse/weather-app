import type { Option } from "@/components/ui/AutoComplete/AutoComplete.types";

export interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

export interface SearchHistoryItem<T> {
  option: Option<T>;
  timestamp: number;
  weather: WeatherData;
}

export interface WeatherStore<T> {
  searchHistory: SearchHistoryItem<T>[];
  currentWeatherIndex: number;
  addSearchHistory: (item: SearchHistoryItem<T>) => void;
  removeSearchHistory: (index: number) => void;
  getCurrentWeather: () => SearchHistoryItem<T> | null;
  setCurrentWeatherIndex: (index: number) => void;
}
