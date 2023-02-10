import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import SwiperImage from '../src/components/homePage/SwiperImage';
import SwiperAds from '../src/components/homePage/SwiperAds';
import MoviesText from '../src/components/homePage/MoviesText';
import SeconderyMoviesList from '../src/components/homePage/SeconderyMoviesList';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import Loader from '../src/components/common/Loader';

interface ActiveChatsProps {}
const Homepage: React.FC<ActiveChatsProps> = () => {
  const [page, setPage] = React.useState(true);

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      setPage(false);
    }
  }, []);

  return (
    <>
      {page ? (
        <Loader />
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
