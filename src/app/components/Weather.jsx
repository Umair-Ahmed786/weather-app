import React from "react";

import { Box, Center, Loader, Text, Title } from "@mantine/core";

import LocationInput from "./LocationInput";

function Weather({
  locationQuery,
  handleLocation,
  setLocationQuery,
  isLoading,
  weatherData,
  error,
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
          <Box my="xl">
            <pre>{JSON.stringify(weatherData, null, 2)}</pre>
            {error ? (
              <>
                <Title>{error.response.status}!</Title>
                <Text tt="uppercase">
                  {error?.response?.data?.message || error?.message}
                </Text>
              </>
            ) : null}
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Weather;
