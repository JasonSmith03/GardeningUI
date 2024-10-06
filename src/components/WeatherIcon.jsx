import sunnyIcon from '../assets/01d.png';
import moonIcon from '../assets/01n.png';
import fewCloudDayIcon from '../assets/02d.png';
import fewCloudNightIcon from '../assets/02n.png';
import scatteredCloudDayIcon from '../assets/03d.png';
import scatteredCloudNightIcon from '../assets/03n.png';
import brokenCloudDayIcon from '../assets/04d.png';
import brokenCloudNightIcon from '../assets/04n.png';
import showerRainDayIcon from '../assets/09d.png';
import showerRainNightIcon from '../assets/09n.png';
import rainDayIcon from '../assets/10d.png';
import rainNightIcon from '../assets/10n.png';
import thunderstormDayIcon from '../assets/11d.png';
import thunderstormNightIcon from '../assets/11n.png';
import snowDayIcon from '../assets/13d.png';
import snowNightIcon from '../assets/13n.png';
import mistDayIcon from '../assets/50d.png';
import mistNightIcon from '../assets/50n.png';
// Import other icons as needed

const iconMapping = {
    '01d': sunnyIcon,  // clear sky
    '01n': moonIcon,  // clear sky
    '02d': fewCloudDayIcon, // few clouds
    '02n': fewCloudNightIcon, // few clouds
    '03d': scatteredCloudDayIcon,  // scattered clouds
    '03n': scatteredCloudNightIcon,  // scattered clouds
    '04d': brokenCloudDayIcon, // broken clouds
    '04n': brokenCloudNightIcon, // broken clouds
    '09d': showerRainDayIcon, // shower rain
    '09n': showerRainNightIcon, // shower rain
    '10d': rainDayIcon, // rain
    '10n': rainNightIcon, // rain
    '11d': thunderstormDayIcon, // thunderstorm
    '11n': thunderstormNightIcon, // thunderstorm
    '13d': snowDayIcon, // snow
    '13n': snowNightIcon, // snow
    '50d': mistDayIcon, // mist
    '50n': mistNightIcon, // mist
};

const WeatherIcon = ({ weather }) => {
    // Get the corresponding icon based on the weather.icon value
    const icon = iconMapping[weather.icon] || scatteredCloudDayIcon; // defaultIcon for fallback

    return icon;
};

export default WeatherIcon;
