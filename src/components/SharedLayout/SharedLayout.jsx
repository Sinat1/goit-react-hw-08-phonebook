import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import Box from '@mui/material/Box';

export const SharedLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          maxWidth: `1700px`,
          height: `110vh`,
          margin: `0 auto`,
          backgroundColor: `aliceblue`,
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
