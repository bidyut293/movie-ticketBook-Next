import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Footer from '../src/common/Footer';
import Header from '../src/common/Header';

import MaxWidthWrapper from '../src/common/MaxWidthWrapper';

import SwiperImage from '../src/components/homePage/SwiperImage';
import SwiperAds from '../src/components/homePage/SwiperAds';
import MoviesText from '../src/components/homePage/MoviesText';
import SeconderyMoviesList from '../src/components/homePage/SeconderyMoviesList';

interface ActiveChatsProps {}
const Homepage: React.FC<ActiveChatsProps> = () => {
  const [page, setPage] = React.useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      setPage(false);
    }
  }, []);

  return (
    <>
      {page ? (
        // <Loader />
        ''
      ) : (
        <MaxWidthWrapper>
          <Header />
          <SwiperImage />
          <Box sx={{ padding: { xs: '80px 0px 0px 0px', lg: '60px 0px 0px 0px' } }}>
            <SwiperAds />
          </Box>

          <MoviesText />
          <SeconderyMoviesList />

          <Footer />
        </MaxWidthWrapper>
      )}
    </>
  );
};

export default Homepage;
