import { getCurrentWeather } from "@/api/OpenWeatherApi";
import { useQuery } from "@tanstack/react-query";

export function useGetWeatherQuery(query: { lon: number; lat: number }) {
  return useQuery({
    queryKey: ["getWeather", query.lon, query.lat],
    queryFn: () => getCurrentWeather(query),
    select: res => res.data,
    refetchOnMount:false,
    refetchOnWindowFocus:false
  });
}
