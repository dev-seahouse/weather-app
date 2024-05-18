import React, { ReactNode } from "react";

import { makeDecorator } from "@storybook/preview-api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});
export const withReactQueryDecorator = makeDecorator({
  name: "withReactQueryDecorator",
  parameterName: "reactQuery",
  wrapper: (getStory, context, { parameters }) => {
    if (parameters?.queryData) {
      const { queryKey, data } = parameters.queryData;
      queryClient.setQueryData(queryKey, () => ({ ...data }));
    }

    return (
      <QueryClientProvider client={queryClient}>
        {getStory(context) as ReactNode}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  },
});
