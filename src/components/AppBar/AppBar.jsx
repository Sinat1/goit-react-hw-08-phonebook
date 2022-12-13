import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export const ResponsiveAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: `#3b5998`,
        padding: `0 16px`,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          padding: `20px 0`,
        }}
      >
        <Box
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <RecentActorsIcon
            sx={{ width: `70px`, height: `70px`, paddingRight: `15px` }}
          />
          <Navigation />
        </Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: `45px`,
            fontWeight: `700`,
            textAlign: `center`,
          }}
        >
          PHONEBOOK
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
  );
};
