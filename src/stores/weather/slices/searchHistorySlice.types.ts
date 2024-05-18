import type {
  LocationInfo,
} from "@/stores/weather/slices/currentWeatherSlice.types";

export interface SearchHistoryItem {
  id: string;
  locationInfo: LocationInfo;
  timeStamp: string;
}

export interface SearchHistorySlice {
  searchHistory: {
    data: SearchHistoryItem[];
    addSearchHistory: (locationInfo: LocationInfo) => void;
    deleteHistory: (id: string) => void;
    getSearchHistories: () => SearchHistoryItem[];
  };
}
