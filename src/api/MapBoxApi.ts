import { createAxiosInstance } from "./createAxiosInstance";
import type {
  GetPlacesRequest,
  GetPlacesResponse,
} from "./MapBoxApi.types";

const baseURL = import.meta.env.VITE_MAPBOX_API_BASE_URL;
const apiKey = import.meta.env.VITE_MAPBOX_API_KEY;

const instance = createAxiosInstance(baseURL, apiKey);

export async function getPlaces(payload: GetPlacesRequest) {
  const apiUrl = `${baseURL}/search/geocode/v6/forward`;
  return instance.get<GetPlacesResponse>(apiUrl, {
    params: {
      ...payload,
      access_token: apiKey,
      autocomplete: true,
      limit: 10,
    },
  });
}
