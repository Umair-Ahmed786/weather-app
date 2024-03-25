import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import WeatherContainer from "./app/containers/WeatherContainer";
import DeveloperCredits from "./app/components/DeveloperCredits";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryDelay: (attemptIndex) => Math.min(1000 * 3 ** attemptIndex, 30000),
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherContainer />
      <DeveloperCredits />
    </QueryClientProvider>
  );
}

export default App;
