import { Routes, Route, Navigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Signin from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

const AuthRoutes = () => (
  <>
    <Container>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Navigate to='/signin' />} />
      </Routes>
    </Container>
  </>
);

export default AuthRoutes;
