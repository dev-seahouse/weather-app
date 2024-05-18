import axios from "axios";

export function createAxiosInstance(baseURL: string, apiKey: string) {
  if (!baseURL) throw new Error("Weather api url is missing.");
  if (!apiKey) throw new Error("Weather api key is missing");

  return axios.create({
    baseURL,
    timeout: 1000,
  });
}
