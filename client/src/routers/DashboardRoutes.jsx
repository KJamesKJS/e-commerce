import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '../components/NavBar/NavBar';
import ItemListCointainer from '../components/Item/ItemListCointainer';
import ItemDetailContainer from '../components/Item/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import Container from '@mui/material/Container';
import Testing from '../components/ui/Testing';
import Signin from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

const DashboardRoutes = () => {
  return (
  <>
    <Navbar />
    <Container>
      <Routes>
        <Route path='/' element={<ItemListCointainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/search/:term' element={<ItemListCointainer />} />
        <Route path='/category/:categoryId' element={<ItemListCointainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
  </>
)};

export default DashboardRoutes;
