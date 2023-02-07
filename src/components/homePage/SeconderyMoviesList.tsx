import React from 'react';
import Image from 'next/image';
import style from '../../../styles/homepage.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { movieData } from '../../data/data';

const SeconderyMoviesList = () => {
  return (
    <>
      <Box sx={{ paddingTop: { lg: '1px' }, display: 'flex', justifyContent: 'space-between' }}>
        {movieData.secondary.map((data, ind) => {
          return (
            <>
              <Box>
                <Image
                  src={data.linkImg}
                  width={360}
                  height={510}
                  alt=""
                  className={style.moviesimg}
                  // sx={{
                  //   margin: '35px',
                  //   borderRadius: '15px',
                  // }}
                />

                <Typography
                  variant="h5"
                  className="moviesh5text"
                  sx={{
                    color: '#333333',
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: { lg: '24px', xs: '15px' },
                    lineHeight: { lg: '32px', xs: '15px' },
                    marginLeft: { lg: '35px', xs: '15px' },
                    marginRight: { lg: '35px', xs: '15px' },
                  }}
                >
                  {data.title}
                </Typography>

                <Typography
                  variant="h5"
                  className="moviesh5text"
                  sx={{
                    color: '#333333',
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    // fontSize: '16px',
                    // lineHeight: '35px',
                    // marginLeft: '35px',
                    // marginRight: '35px',
                    fontSize: { lg: '16px', xs: '10px' },
                    lineHeight: { lg: '32px', xs: '15px' },
                    marginLeft: { lg: '35px', xs: '15px' },
                    marginRight: { lg: '35px', xs: '15px' },
                  }}
                >
                  {data.Text}
                </Typography>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default SeconderyMoviesList;
