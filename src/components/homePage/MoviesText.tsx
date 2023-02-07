import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const MoviesText = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: { lg: '61px', xs: '65px' },
          textAlign: 'center',
          alignItems: 'center',
          paddingBottom: '5px',
        }}
      >
        <Box
          sx={{
            textAlign: 'left',
          }}
        >
          <Typography
            variant="h5"
            className="moviesh5text"
            sx={{
              color: '#333333',
              fontFamily: 'system-ui',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: { lg: '24px', xs: '30px' },
              lineHeight: { lg: '32px', xs: '35px' },
            }}
          >
            Movies
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#414A63',
              fontFamily: 'system-ui',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '40px', xs: '10px' },
            }}
            className="moviesh5text"
          >
            Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
          </Typography>
        </Box>

        <Box>
          <Link
            sx={{
              fontFamily: 'system-ui',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: { lg: '24px', xs: '25px' },
              lineHeight: { lg: '32px', xs: '25px' },
              textAlign: 'right',
              textTransform: 'capitalize',
              color: '#118EEA',
              textDecoration: 'none',
            }}
          >
            See All
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default MoviesText;
