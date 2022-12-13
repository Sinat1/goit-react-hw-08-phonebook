import { Blocks } from 'react-loader-spinner';
import Box from '@mui/material/Box';

export const SmallLoader = () => {
  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        marginBottom: `100vh`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <Blocks
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </Box>
  );
};
