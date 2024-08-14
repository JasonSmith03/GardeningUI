import axios from 'axios'; 

const fetchPlantData = async () => {
    try {
        const response = await axios.get('http://localhost:8089/garden/v1');
        console.log('response data - ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching plant data:', error);
    }
};

export default fetchPlantData;