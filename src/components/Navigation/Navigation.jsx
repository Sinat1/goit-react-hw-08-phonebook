import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Typography from '@mui/material/Typography';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav style={{ display: `flex` }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
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
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
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
            Contacts
          </Typography>
        </NavLink>
      )}
    </nav>
  );
};
