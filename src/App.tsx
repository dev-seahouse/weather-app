import React from "react";

import { getPlaces } from "@/api/MapBoxApi";
import type { GetPlacesResponse } from "@/api/MapBoxApi.types";
import { FullScreenBg } from "@/components/layouts/FullScreenBg";
import { AutoComplete } from "@/components/ui/AutoComplete";
import type { Option } from "@/components/ui/AutoComplete/AutoComplete.types";
import { DisplayWeather } from "@/features/DisplayWeather";
import SearchIcon from "@/icons/searchIcon";
import { AppProvider } from "@/providers/AppProvider";

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
  function handleOptionSelected(
    item: Option<GetPlacesResponse["features"][0]>,
  ) {}

  const [inputValue, setInputValue] = React.useState("");

  return (
    <AppProvider>
      <FullScreenBg>
        <main className="container py-5">
          {/* header */}
          <header
            className={`
              flex items-center gap-2 pb-[8.69rem]

              sm:gap-4
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
          <section className="flex">
            <DisplayWeather />
          </section>
        </main>
      </FullScreenBg>
    </AppProvider>
  );
}

export default App;
