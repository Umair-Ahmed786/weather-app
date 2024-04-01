import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import WeatherContainer from "./app/containers/WeatherContainer";


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
     
    </QueryClientProvider>
  );
}

export default App;
