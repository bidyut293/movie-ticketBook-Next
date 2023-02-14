import React from 'react';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop, Button, Dialog } from '@mui/material';

const loaderPage = () => {
  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default loaderPage;
