import { React, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardHeader,
} from "@mui/material";
import { styled } from "@mui/system";
import fetchWeatherData from "../services/openWeatherApi";
import WeatherIcon from './WeatherIcon';

// this is a card component with specific styling
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#dee2d9", // Light blue background
  borderRadius: "16px", // Rounded corners
  textAlign: "center", // Center text
  width: "400px",
  height: "500px",
}));

const WeatherCard = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);
  const [weather, setWeather] = useState(null);

  // Effect to get geolocation
  // Effect to get geolocation ensure this data comes before making the API call
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting geolocation: ", error);
      }
    );
  }, []);

  // Effect to fetch weather data
  // Now that lat and long are set we can make the API call to get the weather data, once we get that we use the result (in case data isnt set) to set the weather property
  useEffect(() => {
    const getWeatherData = async () => {
      if (lat && long) {
        try {
          const result = await fetchWeatherData(lat, long);
          setData(result);
          if (result && result.current && result.current.weather) {
            setWeather(result.current.weather[0]);
          }
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      }
    };

    getWeatherData();
    // [lat, long] can be added at the end of useEffect if they frequently change making multiple API calls. Since these are constant they can be removed from the useEffect dependency
  }, [lat, long]);

  console.log("lat is ", lat);
  console.log("long is ", long);
  console.log("data - ", data);
  console.log("weather icon - ", weather?.icon);

  if (!data || !weather) {
    return <div>Loading Weather Widget...</div>;
  }

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h4" gutterBottom>
            {data?.timezone}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={WeatherIcon({ weather })}
        alt="Weather icon"
      />
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingBottom={6}
        >
          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            {data?.current?.temp ? `${data.current.temp}°C` : "N/A"}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {data?.daily?.[0]?.summary || "N/A"}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography variant="body2">Wind</Typography>
          <Typography variant="body2">Humidity</Typography>
          <Typography variant="body2">Feels like</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography variant="body2">
            {data?.current?.wind_speed
              ? `${data.current.wind_speed}m/s`
              : "N/A"}
          </Typography>
          <Typography variant="body2">
            {data?.current?.humidity ? `${data.current.humidity}%` : "N/A"}
          </Typography>
          <Typography variant="body2">
            {data?.current?.feels_like ? `${data.current.feels_like}°C` : "N/A"}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default WeatherCard;
