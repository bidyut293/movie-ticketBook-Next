import React from 'react';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop, Button, Dialog } from '@mui/material';

const loaderPage = () => {
  return (
    <div>
      {/* <Dialog open={true}>
        <Stack
          sx={{
            color: 'grey.500',
            backgroundColor: 'transparent',
            overflowX: 'hidden',
            overflowY: 'hidden',
          }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="inherit" />
        </Stack>
      </Dialog> */}
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default loaderPage;
