import React, { useState } from "react";

import Weather from "../components/Weather";
import useWeather from "../data/weather";

function WeatherContainer() {
  const [locationQuery, setLocationQuery] = useState("");
  const [location, setLocation] = useState(null);
  const { weatherData, isLoading, error } = useWeather({ location });

  const handleLocation = () => {
    setLocation(locationQuery);
  };

  return (
    <Weather
      location={location}
      locationQuery={locationQuery}
      handleLocation={handleLocation}
      setLocationQuery={setLocationQuery}
      isLoading={isLoading}
      weatherData={weatherData}
      error={error}
    />
  );
}

export default WeatherContainer;
