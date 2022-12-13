import { Blocks } from 'react-loader-spinner';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        marginTop: `30vh`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <Blocks
        visible={true}
        height="300"
        width="300"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </Box>
  );
};
