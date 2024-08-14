import { Box, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, Paper, Typography, Modal } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import PlantCard from "../components/PlantCard";
import WeatherCard from "../components/WeatherCard";
import PlantRegisterForm from "./PlantRegisterForm";
import { React } from 'react'
import TaskList from "../components/TaskList";
import postPlantData from '../services/gardenPOSTApi';
import DashPlantGrid from "../components/DashPlantGrid";

function Dashboard() {

    //setting the state to show the plant registration form 
    const [showPlantRegComp, setPlantRegComp] = useState(false);
    const [getPlants, setPlants] = useState([]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      //fintions that will help manage the state of the modal dialog
      const handleOpenModal = () => setPlantRegComp(true);
      const handleCloseModal = () => setPlantRegComp(false);

    return (
    <>
        <CssBaseline />
        <Container xs={12} sm={6} md={4} sx={{ background: '#8DA290', padding: '16px', marginTop: '32px'}}> 
            <Box paddingTop={10} display={'flex'} flexDirection={'row'}>

                <DashPlantGrid />

                <Box paddingTop={7}>
                    <IconButton aria-label="add-plant" size="large" sx={{background:'white', padding:'16px'}} onClick={handleOpenModal} >
                        <AddIcon fontSize="large" />
                    </IconButton>
                    <Modal 
                        open={showPlantRegComp}
                        onClose={handleCloseModal}
                        aria-labelledby='form-plant-register'
                        aria-describedby='adding-new-plant'
                    >
                        <Box sx={style} >
                            <PlantRegisterForm handleClose={handleCloseModal} />
                        </Box>
                    </Modal>
                </Box>
            </Box>



            <Box display={"flex"} sx={{ paddingTop:'16px'}}>
                {/* weather widget */}
                <Box>
                    {/* <WeatherCard /> */}
                </Box>

                {/* tasks to take care of plant */}
                <Box sx={{ paddingLeft: 26 }}>
                    <Typography variant="h4" align="left" gutterBottom> 
                        Notifications
                    </Typography>
                    <TaskList />
                </Box>
            </Box>


        </Container>
    </>
    );
}
export default Dashboard;