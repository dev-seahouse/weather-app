import type React from "react";

import { Button } from "@/components/ui/Button/Button";
import { DeleteIconRound } from "@/icons/DeleteIconRound";
import { SearchIconRound } from "@/icons/SearchIconRound";
import type {
  SearchHistoryItem as SearchHistoryItemType,
} from "@/stores/weather/slices/searchHistorySlice.types";
import {
  useDeleteSearchHistory,
} from "@/stores/weather/useWeatherStore.selectors";

export const SearchHistoryItem: React.FC<{
  history: SearchHistoryItemType;
}> = ({ history }) => {
  const deleteHistory = useDeleteSearchHistory();

  return (
    <div
      className={`
        mb-4 flex items-center justify-between rounded-lg
        bg-[rgba(26,26,26,0.5)] p-4
      `}
    >
      <div>
        <div className="text-sm font-normal text-white">
          {history.locationInfo.regionName}, {history.locationInfo.countryCode}
        </div>
        <div className="text-xs font-normal text-[rgba(255,255,255,0.5)]">
          {new Date(history.timeStamp).toLocaleString()}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="size-[2.125rem] p-0">
          <SearchIconRound className="size-full text-sm text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-[2.125rem] p-0"
          onClick={() => deleteHistory(history.id)}
        >
          <DeleteIconRound className="size-full" />
        </Button>
      </div>
    </div>
  );
};
