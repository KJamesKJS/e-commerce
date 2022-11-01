import React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import SearchBar from './SearchBar';
import CartWidget from '../Cart/CartWidget';
import MenuAvatar from '../ui/MenuAvatar';
import Logo from './Logo';
import MenuNavList from './MenuNavList';

import ThemeContext from '../../context/ThemeContext';

const NavBar = () => {
  const [categories, setCategories] = useState(null);
  const pages = [`Men's clothing`, `Women's clothing`];

  useEffect(() => {
    /*
    async function fetchData() {
      await fetch(`https://fakestoreapi.com/products/categories`)
      .then(response => response.json())
      .then(category=>{
        setCategories([category[2],category[3]]);
      })
      .catch(err => console.error(err));
    }
    fetchData();
    */
    setCategories(pages);
  }, []);
  
  return (
    <ThemeContext>
      <AppBar position='static' sx={{ bgcolor: '#7231c2' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Logo />
            {(categories) ? <MenuNavList pages={categories} /> : ''}
            <Container maxWidth='lg' disableGutters>
              <SearchBar />
            </Container>
            <CartWidget />
            <MenuAvatar />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeContext>
  );
};

export default NavBar;
