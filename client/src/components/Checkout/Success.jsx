import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

const Success = ({ orderId }) => {
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        className='animate__animated animate__pulse'
      >
        <img src='/assets/img/logo.svg' alt='success' width={200} />
      </Box>
      <Typography variant='h5' align='center' gutterBottom>
       Thank you very much for your purchase!
      </Typography>

      <Typography variant='subtitle1'>
        Your purchase code is:{' '}
        <Typography variant='subtitle' color='primary'>
          {orderId}
        </Typography>
        . We send an email to your email with the details of your purchase and
        We will be in contact with you to follow the status of your order.
      </Typography>

      <Button
        color='primary'
        component={Link}
        to='/'
        sx={{ mt: 3, mx: 'auto', display: 'block', textAlign: 'center' }}
      >
        Back to top
      </Button>
    </>
  );
};
export default Success;
