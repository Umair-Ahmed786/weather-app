import { useQuery } from "react-query";
import axios from "axios";

const useWeather = ({ location }) => {
  console.log(process.env.REACT_APP_OPENWEATHERMAP_API_KEY);
  const fetchWeather = async () => {
    if (!location) return null;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: `weather-${location}`,
    queryFn: fetchWeather,
    retry: false,
  });

  return { weatherData: data, isLoading, error };
};

export default useWeather;
