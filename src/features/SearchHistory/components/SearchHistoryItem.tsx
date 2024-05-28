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
import { useQueryClient } from "@tanstack/react-query";

export const SearchHistoryItem: React.FC<{
  history: SearchHistoryItemType;
}> = ({ history }) => {
  const deleteHistory = useDeleteSearchHistory();
  const updateLocation = useSetLocationInfo();
  const queryClient = useQueryClient();

  function handleSearchButtonClick() {
    void queryClient.invalidateQueries({ queryKey: ["getWeather"] });
    updateLocation(history.locationInfo);
  }

  function handleDeleteButtonClick() {
    const element = document.getElementById(`history-item-${history.id}`);
    if (element) {
      element.classList.add("animate-fadeOut");
      setTimeout(() => deleteHistory(history.id), 200); // Duration matches the animation duration
    } else {
      throw new Error("Error deleting search history");
    }
  }

  return (
    <div
      id={`history-item-${history.id}`}
      className={`
        mb-4 flex items-center justify-between rounded-2xl
        bg-[rgba(26,26,26,0.5)] p-4 transition-opacity
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
          onClick={handleDeleteButtonClick}
        >
          <DeleteIconRound className="size-full" />
        </Button>
      </div>
    </div>
  );
};
