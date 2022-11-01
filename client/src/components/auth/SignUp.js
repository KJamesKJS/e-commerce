import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    setOpen(false);
    navigate(`/signin`)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const handleEntering = () => {
  };

  return (
    <Dialog open={open} TransitionProps={{ onEntering: handleEntering }}>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{background:'white', paddingTop:'1px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="common.black">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} validate="true" sx={{ mt: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  autoFocus
                  size="small"
                />
                {/* <TextField
                  label="Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  autoComplete="off"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
                /> */}
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  size="small"
                />
              </Grid>
            </Grid>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  size="small"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  size="small"
                />
              
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={
                    <Typography variant="subtitle2" style={{ color: "#000000" }}>
                      I want to receive inspiration, marketing promotions and updates via email.
                    </Typography>
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" onClick={handleNavigateSignIn} variant="body2">
                  {"Already have an account? LogIn"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Dialog>
  );
}