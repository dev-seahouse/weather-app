import React from "react";

import { getPlaces } from "@/api/MapBoxApi";
import type { GetPlacesResponse } from "@/api/MapBoxApi.types";
import { FullScreenBg } from "@/components/layouts/FullScreenBg";
import { AutoComplete } from "@/components/ui/AutoComplete";
import type { Option } from "@/components/ui/AutoComplete/AutoComplete.types";
import { DisplayWeather } from "@/features/DisplayWeather";
import SearchIcon from "@/icons/searchIcon";
import { AppProvider } from "@/providers/AppProvider";
import type {
  LocationInfo,
} from "@/stores/weather/slices/currentWeatherSlice.types";
import { useSetLocationInfo } from "@/stores/weather/useWeatherStore.selectors";
import { get } from "@/utils/get";

async function fetchSuggestions(query: string) {
  const res = await getPlaces({
    q: query,
  });

  return res.data.features.map(item => ({
    id: item.id,
    label: item.properties.full_address,
    value: item,
  }));
}

function App() {
  const setLocation = useSetLocationInfo();
  function handleOptionSelected(
    item: Option<GetPlacesResponse["features"][0]>,
  ) {
    const newLocation = {
      longitude: get(item, "value.properties.coordinates.longitude", 0) ?? 0,
      latitude: get(item, "value.properties.coordinates.latitude", 0) ?? 0,
      countryCode:
        get(item, "value.properties.context.country.country_code", "") ?? "",
      regionName: get(item, "value.properties.context.region.name", "") ?? "",
    } satisfies LocationInfo;
    setLocation(newLocation);
  }

  const [inputValue, setInputValue] = React.useState("");

  return (
    <AppProvider>
      <FullScreenBg>
        <main className="container py-5">
          {/* header */}
          <header
            className={`
              flex items-center gap-2 pb-[8.69rem]

              sm:gap-4 sm:pb-28
            `}
          >
            <AutoComplete
              value={inputValue}
              setValue={setInputValue}
              label="Country"
              onOptionSelected={handleOptionSelected}
              fetchSuggestions={fetchSuggestions}
              labelClassName="text-white/[.5] peer-focus:text-white/[.5]"
              inputClassName={`border-transparent bg-[#1A1A1A]/[.5] text-white`}
              debounceTimeout={1000}
              popoverClassName="translate-x-5 sm:translate-x-8"
            />
            <div>
              <SearchIcon
                className={`
                  size-10

                  sm:size-[3.3rem]
                `}
              />
            </div>
          </header>

          {/* weather info pane */}
          <section
            className={`
              flex items-center justify-center overflow-auto rounded-lg
              bg-[#1A1A1A]/[.3] p-5 backdrop-blur-sm

              sm:p-11
            `}
          >
            <DisplayWeather />
          </section>
        </main>
      </FullScreenBg>
    </AppProvider>
  );
}

export default App;
