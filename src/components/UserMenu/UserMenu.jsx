import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{ display: `flex`, alignItems: `center`, justifyContent: `center` }}
    >
      <Typography
        paragraph={true}
        sx={{
          color: `#fff`,
          fontSize: `20px`,
          fontWeight: `600`,
          margin: `0`,
          paddingRight: `15px`,
        }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: `aliceblue`,
          color: `#1f1f1f`,
          '&:hover': {
            color: '#fff',
          },
        }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
