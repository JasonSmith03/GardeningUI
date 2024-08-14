
import { React, useState, useEffect } from 'react';
import {Box, TextField, Typography, Button } from "@mui/material";

const PlantRegisterForm = ({ handleClose }) => {

    const handleSubmit = (event) => {
        //prevent the page from refreshing and allowing for custom operations once submit button is hit
        event.preventDefualt();

        //Handle form submission logic here
        console.log('MAKING POST REQUEST HERE')

        handleClose(); //Close the modal after submission
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box display={'flex'} flexDirection={'column'} gap={2}> 
                <Typography variant='h6' padding={'10px'}>Adding a Plant</Typography>
                <TextField required id="outlined-required" label="Plant Name" />
                <TextField required id="outlined-required" label="Plant Species" />
                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'}> 
                    <Button type="submit" variant="contained" color="primary"> Submit </Button>
                    <Button variant='outlined' color='secondary' onClick={handleClose} >Cancel</Button>
                </Box>
            </Box>
        </form>
    );

}


 export default PlantRegisterForm;