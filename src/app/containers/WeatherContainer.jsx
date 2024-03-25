import React, { useState } from "react";

import { useDebouncedValue } from "@mantine/hooks";

import Weather from "../components/Weather";
import useWeather from "../data/weather";

function WeatherContainer() {
  const [locationQuery, setLocationQuery] = useState("");
  const [location, setLocation] = useState(null);
  const { weatherData, isLoading } = useWeather({ location });

  const handleLocation = () => {
    setLocation(locationQuery);
  };

  return (
    <Weather
      locationQuery={locationQuery}
      handleLocation={handleLocation}
      setLocationQuery={setLocationQuery}
      isLoading={isLoading}
      weatherData={weatherData}
    />
  );
}

export default WeatherContainer;
