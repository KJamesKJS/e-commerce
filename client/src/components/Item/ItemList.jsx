import Item from './Item';
import getPageTitle from '../../helpers/getPageTitle';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
//<h2>{getPageTitle()}</h2>
const ItemList = ({ items }) => (
  <>
    <h1 style={{textAlign: "center"}}>{getPageTitle().toUpperCase()}</h1>
    <hr />
    <Grid container spacing={6} py={3}>
      {items?.map((item) => (
        <Grid item xs={12} sm={4} lg={3} key={item.id}>
          <Item {...item} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default ItemList;
