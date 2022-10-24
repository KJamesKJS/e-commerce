import { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { padding } from '@mui/system';


const ItemDescription = ({ characteristics }) => (
  <Paper elevation={4} sx={{ my: 5 }} 
    style={{
    padding: 18,
    border: "1px solid white"
  }}>
    <Typography variant='h6' component='p'>
        {characteristics}
    </Typography>
  </Paper>
);

export default ItemDescription;
