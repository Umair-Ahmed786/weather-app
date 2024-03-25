import React from "react";
import PropTypes from "prop-types";

import { Box, Center, Loader, Text, Title } from "@mantine/core";
import Lottie from "react-lottie";

import LocationInput from "./LocationInput";
import weatherAnimation from "../lottie/weather.json";
import WeatherData from "./WeatherData";

function Weather({
  location,
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
          <Box my="xl" p="lg">
            {!location && (
              <>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: weatherAnimation,
                  }}
                  height={200}
                  width={200}
                />
                <Text size="xl" fw={600}>
                  Search for location to see it's weather.
                </Text>
              </>
            )}
            {weatherData && <WeatherData weatherData={weatherData} />}
            {error && (
              <>
                <Title>{error.response.status}!</Title>
                <Text tt="uppercase">
                  {error?.response?.data?.message || error?.message}
                </Text>
              </>
            )}
          </Box>
        )}
      </Box>
    </div>
  );
}

Weather.propTypes = {
  location: PropTypes.string.isRequired,
  locationQuery: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  setLocationQuery: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  weatherData: PropTypes.shape({}).isRequired,
  error: PropTypes.shape({}).isRequired,
};

export default Weather;
