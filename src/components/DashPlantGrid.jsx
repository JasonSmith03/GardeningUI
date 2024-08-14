import { useState, useEffect, React } from 'react';
import { Grid } from '@mui/material';
import PlantCard from './PlantCard';
 import fetchPlantData from '../services/gardenGETApi';


const DashPlantGrid = () => {

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const getPlantsDb = async () => {
            const result = await fetchPlantData();
            setPlants(result);
        }

        getPlantsDb();
   
    } , []);

    return (
        <>
            {/* the first grid tag is for the container which works off of a 12 col system */}
            <Grid container sx={{ flexGrow: 1 }} spacing={2} paddingRight={'16px'}>
                {
                    plants?.map(
                        (plant) => 
                            <Grid item xs={12} sm={6} md={3}> 
                                <PlantCard plantName={plant.plants_name} plantSpecies={plant.plants_species} />
                            </Grid>
                    )
                }
            </Grid>
        </>
    );
}

export default DashPlantGrid;