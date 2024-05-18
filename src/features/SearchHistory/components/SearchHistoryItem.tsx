import type React from "react";

import { Button } from "@/components/ui/Button/Button";
import { DeleteIconRound } from "@/icons/DeleteIconRound";
import { SearchIconRound } from "@/icons/SearchIconRound";
import type {
  SearchHistoryItem as SearchHistoryItemType,
} from "@/stores/weather/slices/searchHistorySlice.types";
import {
  useDeleteSearchHistory,
  useSetLocationInfo,
} from "@/stores/weather/useWeatherStore.selectors";
import { formatISODateString } from "@/utils/formatISODateString";

export const SearchHistoryItem: React.FC<{
  history: SearchHistoryItemType;
}> = ({ history }) => {
  const deleteHistory = useDeleteSearchHistory();
  const updateLocation = useSetLocationInfo();

  function handleSearchButtonClick() {
    updateLocation(history.locationInfo);
  }

  return (
    <div
      className={`
        mb-4 flex items-center justify-between rounded-2xl
        bg-[rgba(26,26,26,0.5)] p-4
      `}
    >
      <div
        className={`
          grow

          sm:flex sm:items-center sm:justify-between sm:pr-3
        `}
      >
        <div
          className={`
            mb-[2px] text-sm font-normal text-white

            sm:text-[1rem]
          `}
        >
          {history.locationInfo.regionName}, {history.locationInfo.countryCode}
        </div>

        <div
          className={`
            text-[0.625rem] font-normal text-[rgba(255,255,255,0.5)]

            sm:text-[0.875rem]
          `}
        >
          {formatISODateString(history.timeStamp).toLowerCase()}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={handleSearchButtonClick}
          variant="ghost"
          size="icon"
          className={`
            size-[2.125rem] p-0

            hover:bg-white/[.3]
          `}
        >
          <SearchIconRound className="size-full text-sm text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`
            size-[2.125rem] p-0

            hover:bg-white/[.3]
          `}
          onClick={() => deleteHistory(history.id)}
        >
          <DeleteIconRound className="size-full" />
        </Button>
      </div>
    </div>
  );
};
