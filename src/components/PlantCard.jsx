// Plant.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import YardIcon from '@mui/icons-material/Yard'; 

// Define color mapping based on moisture levels
const colorMapping = {
    high: '#FEFAE0',    // 60%-100%
    mediumHigh: '#FFE4C5', // 40%-59%
    mediumLow: '#F1C696',  // 20%-39%
    low: '#DDA15E'       // 0%-19%
};

// Styled card component
const StyledCard = styled(Card)(({ theme, bgColor }) => ({
    backgroundColor: bgColor, // Use bgColor instead of backgroundColor
    borderRadius: '16px', // Rounded corners
    textAlign: 'center', // Center text
}));

const PlantCard = (props) => {
    // Determine the background color based on moisture percentage
    let bgColor; // Use bgColor instead of backgroundColor
    const moisturePct = props.moisturePct;

    if (moisturePct >= 60) {
        bgColor = colorMapping.high;       // 60% - 100%
    } else if (moisturePct >= 40) {
        bgColor = colorMapping.mediumHigh; // 40% - 59%
    } else if (moisturePct >= 20) {
        bgColor = colorMapping.mediumLow;  // 20% - 39%
    } else {
        bgColor = colorMapping.low;        // 0% - 19%
    }

    return (
        <StyledCard bgColor={bgColor}>
            <CardContent>
                <YardIcon fontSize="large" style={{ color: '#283618' }} />
                <Typography variant="h4" component="div" style={{ color: '#7B410E', marginTop: '16px' }}>
                    {moisturePct}%
                </Typography>
                <Typography variant="body2" color="#283618">
                    Moisture level
                </Typography>
                <Typography variant="body2" color="#283618">
                    {props.plantName}
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default PlantCard;
