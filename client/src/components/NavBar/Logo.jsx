import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

const Logo = () => (
  <Avatar
    component={Link}
    to='/'
    sx={{ marginRight: 3, height: 45 }}
    src='../assets/img/logo.jpg'
    alt='ecommerce'
    loading='lazy'
    variant='rounded'
  />
);

export default Logo;
