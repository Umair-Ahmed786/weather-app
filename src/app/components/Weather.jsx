import React from "react";

import { Box, Center, Loader } from "@mantine/core";

import LocationInput from "./LocationInput";

function Weather({
  locationQuery,
  handleLocation,
  setLocationQuery,
  isLoading,
  weatherData,
}) {
  return (
    <div className="WeatherContainer">
      <Box maw={500} m="auto">
        <LocationInput
          value={locationQuery}
          onChange={setLocationQuery}
          handleLocation={handleLocation}
        />

        {isLoading ? (
          <Center w="100%" h={400}>
            <Loader type="bars" />
          </Center>
        ) : (
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        )}
      </Box>
    </div>
  );
}

export default Weather;
