import {
  SearchHistoryItem,
} from "@/features/SearchHistory/components/SearchHistoryItem";
import {
  useGetSearchHistories,
} from "@/stores/weather/useWeatherStore.selectors";
import { cn } from "@/utils/cn";

export function SearchHistory({ className }: { className: string }) {
  const histories = useGetSearchHistories();

  return (
    <div
      className={cn("w-full rounded-xl bg-[rgba(26,26,26,0.3)] p-4", className)}
    >
      <h2 className="mb-4 text-base font-normal text-white">Search History</h2>
      {histories.length === 0 ? (
        <div className="text-sm font-normal text-white">
          No search history available.
        </div>
      ) : (
        histories.map(history => (
          <SearchHistoryItem key={history.id} history={history} />
        ))
      )}
    </div>
  );
}
