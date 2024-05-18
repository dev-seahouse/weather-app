import { useId } from "react";

import type { Option } from "@/components/ui/AutoComplete/AutoComplete.types";
import { useQuery } from "@tanstack/react-query";

export function useFetchSuggestions<T>(
  query: string,
  fetchSuggestions: (query: string) => Promise<Option<T>[]>,
  minLength = 2,
) {
  const id = useId();

  return useQuery({
    queryKey: ["autocomplete_suggestions", id, query],
    queryFn: () => fetchSuggestions(query),
    enabled: query.length >= minLength,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
