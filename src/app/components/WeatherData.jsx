import React from "react";

import ReactAnimatedWeather from "react-animated-weather";
import { Center, Grid, Image, Stack, Text, Title } from "@mantine/core";

function WeatherData({ weatherData }) {
  return (
    <>
      <Title>{weatherData?.name}</Title>
      <Text fw={600} c="cyan" tt="capitalize" size="lg">
        {weatherData?.weather?.[0].description}
      </Text>
      <Stack gap={0}>
        <Center>
          <Image
            h={100}
            w={100}
            src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}@2x.png`}
            alt={weatherData?.weather?.[0].description}
            title={weatherData?.weather?.[0].description}
          />
          <div>
            <Text size="30px" super fw={600}>
              {weatherData?.main?.temp} <sup>°C</sup>
            </Text>
          </div>
        </Center>
        <Text size="sm">
          Temp. range{" "}
          <strong>
            {weatherData?.main?.temp_min}
            <sup>°C</sup> - {weatherData?.main?.temp_max}
            <sup>°C</sup>
          </strong>
        </Text>
        <Grid my="lg">
          <Grid.Col span={{ md: 6, xs: 12 }}>
            <div className="weather-condition">
              <div>
                <ReactAnimatedWeather icon="RAIN" size="40" />
              </div>
              <div>
                <Text fw={600}>{weatherData?.main?.humidity} %</Text>
                <Text size="sm">Humidity</Text>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ md: 6, xs: 12 }}>
            <div className="weather-condition">
              <div>
                <ReactAnimatedWeather icon="WIND" size="40" />
              </div>
              <div>
                <Text fw={600}>{weatherData?.wind.speed} m/s</Text>
                <Text size="sm">Wind</Text>{" "}
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}

export default WeatherData;
