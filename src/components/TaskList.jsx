// ScrollableList.jsx
import React from 'react';
import { Box, Paper, Card, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { styled } from '@mui/system';

// this is card component with specific styling
const StyledCard = styled(Card)(({ theme }) => ({
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
                    backgroundColor: '#FEFAE0',
                }}
            >
                <List>
                    {items.map((item, index) => (
                        <ListItem key={index} component={Paper} sx={{ marginBottom: 1, padding: 2, background: '#EAC594 '}}>
                            <ListItemText primary={item} sx={{ color: '#7B410E' }} />
                            <ListItemSecondaryAction>
                                <CheckBoxOutlineBlankIcon sx={{ color: '#7B410E' }}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </StyledCard>
    );
};

export default TaskList;
