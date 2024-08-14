import axios from 'axios';

const postPlantData = async (plantName, plantSpecies, lastWateredTimestamp) => {
    try {
        const response = await axios.post('localhost:8081/garden/v1/add', {'Content-type': 'application/json'});
        console.log('response data - ', response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

export default postPlantData;
