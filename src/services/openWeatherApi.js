import axios from 'axios';

const fetchWeatherData = async (lat, lon) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}`, {
            params: {
                lat: lat,
                lon: lon,
                exclude: 'hourly,minutely',
                appid: process.env.REACT_APP_API_KEY,
                units: 'metric' // Add units parameter if you need metric units
            }
        });
        console.log('response data - ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

export default fetchWeatherData;
