import { useQuery } from "react-query";
import axios from "axios";

const useWeather = ({ location }) => {
  const fetchWeather = async () => {
    if (!location) return null;
    const localData = JSON.parse(localStorage.getItem("weather") || "{}");

    if (localData?.[location]) {
      return localData?.[location];
    } else {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
      const response = await axios.get(url);
      localStorage.setItem(
        "weather",
        JSON.stringify({
          ...localData,
          [location.toLowerCase()]: response.data,
        })
      );
      return response.data;
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: `weather-${location}`,
    queryFn: fetchWeather,
    retry: false,
  });

  return { weatherData: data, isLoading, error };
};

export default useWeather;
