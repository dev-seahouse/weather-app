import {
  SearchHistoryItem,
} from "@/features/SearchHistory/components/SearchHistoryItem";
import {
  useGetSearchHistories,
} from "@/stores/weather/useWeatherStore.selectors";
import { cn } from "@/utils/cn";

export function SearchHistory({ className }: { className?: string }) {
  const histories = useGetSearchHistories();

  return (
    <div
      className={cn(
        `
          w-full rounded-3xl bg-[rgba(26,26,26,0.3)] px-5 py-[1.38rem]

          hover:shadow-xl
        `,
        className,
      )}
    >
      <h2
        className={`
          mb-[1.62rem] text-sm font-normal text-white

          sm:mb-5 sm:text-base
        `}
      >
        Search History
      </h2>
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
