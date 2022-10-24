import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const PaymentForm = () => {
  const { userData, handleChange, errors } = useContext(UserContext);

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Card data
      </Typography>
      <Grid container spacing={3} className='animate__animated animate__fadeIn'>
        <Grid item xs={12}>
          <TextField
            id='cardName'
            name='cardName'
            label='Name on the card'
            fullWidth
            variant='standard'
            value={userData.cardName}
            error={!!errors.cardName}
            helperText={
              errors.cardName || 'Write as it appears on the card'
            }
            onChange={handleChange}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='cardNumber'
            name='cardNumber'
            label='Card number'
            type='number'
            fullWidth
            variant='standard'
            value={userData.cardNumber}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            type='month'
            id='expDate'
            name='cardExpDate'
            label='Expiration date'
            fullWidth
            variant='standard'
            value={userData.cardExpDate}
            error={!!errors.cardExpDate}
            helperText={errors.cardExpDate || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id='cvv'
            name='cardCvv'
            type='password'
            label='CVV'
            fullWidth
            variant='standard'
            value={userData.cardCvv}
            error={!!errors.cardCvv}
            helperText={
              errors.cardCvv || 'Last three digits on signature strip'
            }
            onChange={handleChange}
            inputProps={{ maxLength: 3 }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;
