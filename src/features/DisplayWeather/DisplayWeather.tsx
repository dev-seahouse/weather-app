import { WeatherIcon } from "@/features/DisplayWeather/components/WeatherIcon";
import {
  useGetWeatherQuery,
} from "@/features/DisplayWeather/DisplayWeather.hooks";
import {
  useSelectLocationInfo,
  useSetWeatherInfo,
} from "@/stores/weather/useWeatherStore.selectors";
import { cn } from "@/utils/cn";
import { formatUnixTimestamp } from "@/utils/formatTimeStamp";

export function DisplayWeather({ className }: { className?: string }) {
  const { longitude, latitude, countryCode, regionName } =
    useSelectLocationInfo();

  const updateWeatherInfo = useSetWeatherInfo();

  const {
    data: weatherResponse,
    isError,
    isSuccess,
    dataUpdatedAt,
  } = useGetWeatherQuery({
    lon: longitude,
    lat: latitude,
  });

  if (isError) {
    return (
      <div className="w-full rounded-lg text-white">
        Error fetching weather data
      </div>
    );
  }

  if (isSuccess) {
    updateWeatherInfo({
      temperature: weatherResponse.main.temp,
      humidity: weatherResponse.main.humidity,
      weatherCode: weatherResponse.weather[0].id,
      weather: weatherResponse.weather[0].main,
    });
  }

  return (
    <div className={cn(`w-full rounded-lg text-white`, className)}>
      <WeatherIcon whetherCode={weatherResponse?.weather[0].id} />
      <div
        className={`
          text-sm font-normal

          sm:text-base
        `}
      >
        Today&apos;s Weather
      </div>
      <div className={`flex items-end justify-between`}>
        <div className="sm:flex sm:flex-col">
          <div
            className={`
              text-[4.275rem] font-bold leading-none

              sm:text-[6.6rem]
            `}
          >
            {Math.round(weatherResponse?.main.temp ?? 0)}°
          </div>
          <div
            className={`
              mb-1 text-sm

              sm:text-base
            `}
          >
            H: {parseInt(`${longitude}`)}° L: {parseInt(`${latitude}`)}°
          </div>
          <div
            className={`
              text-sm font-semibold

              sm:text-base
            `}
          >
            {regionName || ""}, {countryCode || ""}
          </div>
        </div>
        <div
          className={`
            flex flex-col justify-end gap-1 whitespace-nowrap text-right

            sm:right-10 sm:grow sm:flex-row sm:items-end sm:justify-between
            sm:gap-3 sm:text-left sm:text-base
          `}
        >
          <div
            className={`
              mt-auto text-sm font-normal

              sm:order-3 sm:mt-0 sm:text-base
            `}
          >
            <div>{weatherResponse?.weather[0].main}</div>
          </div>

          <div
            className={`
              mt-auto text-sm

              sm:order-2 sm:mt-0 sm:text-base
            `}
          >
            <div>Humidity:{weatherResponse?.main.humidity}%</div>
          </div>

          <div
            className={`
              mt-auto text-sm

              sm:order-1 sm:mt-0 sm:text-base
            `}
          >
            <div>{formatUnixTimestamp(dataUpdatedAt).toLowerCase()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
