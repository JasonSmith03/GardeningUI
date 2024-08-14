// ScrollableList.jsx
import React from 'react';
import { Box, Paper, Card, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/system';

// this is card component with specific styling
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#e0f7fa', // Light blue background
    borderRadius: '16px', // Rounded corners
    textAlign: 'center', // Center text
}));

const items = [
    'Water plant 1',
    'Put plant 2 in sun',
    'Itemsddfsfds 3',
    'Itdsfasdfsadfsem 4',
    'Item 5',
    'Itsaem 7',
    'Itfasdfsadfasdfasdfasdfasem 8',
    'Item 9',
    'Itesfsfasfasdfsddaddddddddddddddddddddddddm 10',
];

const TaskList = () => {
    return (
        <StyledCard>
            <Box
                sx={{
                    maxHeight: 450,
                    overflow: 'auto',
                    padding: 2,
                    backgroundColor: '#DEE2D9',
                }}
            >
                <List>
                    {items.map((item, index) => (
                        <ListItem key={index} component={Paper} sx={{ marginBottom: 1, padding: 2, background: '#FCF1D8'}}>
                            <ListItemText primary={item} />
                            <ListItemSecondaryAction>
                                <CheckCircleIcon color="#D5E7B8" />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </StyledCard>
    );
};

export default TaskList;
