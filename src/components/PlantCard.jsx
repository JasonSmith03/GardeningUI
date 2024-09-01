// Plant.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import YardIcon from '@mui/icons-material/Yard'; // This assumes you're using an Android icon. Adjust as necessary.

// this is card component with specific styling
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#D39A5B', // Light blue background
    borderRadius: '16px', // Rounded corners
    textAlign: 'center', // Center text
}));

// this is a box element holding the circle icon and styling it
const IconCircle = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom, #DEE2D9, #BEC7B4)', // Gradient background
    margin: '0 auto', // Center horizontally
}));

const PlantCard = (props) => {
    return (
        <StyledCard>
            <CardContent>
                <YardIcon fontSize="large" style={{ color: '#283618' }} />
                <Typography variant="h4" component="div" style={{ color: '#7B410E', marginTop: '16px' }}>
                    45%
                    {/* {props.moisturePct}%*/}
                </Typography>
                <Typography variant="body2" color="#283618">
                    Moitsure level
                </Typography>
                <Typography variant="body2" color="#283618">
                    {props.plantName}
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default PlantCard;
