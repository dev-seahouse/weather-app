import { createAxiosInstance } from "./createAxiosInstance";
import type {
  GetCitiesRequest,
  GetCurrentWeatherRequest,
  GetCurrentWeatherResponse,
} from "./OpenWeatherApi.types";

const baseURL = import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL;
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const instance = createAxiosInstance(baseURL, apiKey);

export async function getCurrentWeather(payload: GetCurrentWeatherRequest) {
  const apiUrl = `${baseURL}/data/2.5/weather`;
  return instance.get<GetCurrentWeatherResponse>(apiUrl, {
    params: {
      ...payload,
      appid: apiKey,
    },
  });
}

// @deprecated: don't perform well
export async function getCities(payload: GetCitiesRequest) {
  const apiUrl = `${baseURL}/geo/1.0/direct`;
  return instance.get(apiUrl, {
    params: {
      ...payload,
      appid: apiKey,
      limit: 5,
    },
  });
}
