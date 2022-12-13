import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Card, Box, TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        paddingTop: `150px`,
      }}
    >
      <Card
        component="form"
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          width: `400px`,
          height: `350px`,
          boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
          backgroundColor: `#ffffff`,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Email"
          variant="standard"
          type="email"
          name="email"
          sx={{ width: `300px`, paddingBottom: `20px` }}
          required
        ></TextField>
        <TextField
          label="Password"
          variant="standard"
          type="password"
          name="password"
          sx={{ width: `300px`, paddingBottom: `50px` }}
          required
        ></TextField>
        <Button
          variant="contained"
          sx={{
            backgroundColor: `aliceblue`,
            color: `#1f1f1f`,
            '&:hover': {
              color: '#fff',
            },
          }}
          type="submit"
        >
          Log In
        </Button>
      </Card>
    </Box>
  );
};
