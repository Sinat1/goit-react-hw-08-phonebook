import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const AuthNav = () => {
  return (
    <Box sx={{ display: `flex`, justifyContent: `center` }}>
      <NavLink to="/register" style={{ textDecoration: 'none' }}>
        <Typography
          paragraph={true}
          sx={{
            color: `#fff`,
            fontSize: `25px`,
            fontWeight: `700`,
            textDecoration: `none`,
            margin: `0`,
            marginRight: `15px`,
            transition: `border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
            '&:hover': {
              borderBottom: `3px solid #fff`,
              borderRadius: `3px`,
            },
          }}
        >
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: 'none' }}>
        <Typography
          paragraph={true}
          sx={{
            color: `#fff`,
            fontSize: `25px`,
            fontWeight: `700`,
            textDecoration: `none`,
            margin: `0`,
            transition: `border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
            '&:hover': {
              borderBottom: `3px solid #fff`,
              borderRadius: `3px`,
            },
          }}
        >
          Log In
        </Typography>
      </NavLink>
    </Box>
  );
};
