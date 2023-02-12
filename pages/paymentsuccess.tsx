import { Button, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
// import bookedlogo from '../../Images/homePage/booked.png';
import bookedlogo from '../public/images/homepageImage/homePage/booked.png';

import style from '../styles/paymentsuccess.module.css';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import AuthComponent from '../src/components/common/AuthComponent';

const Paymentsuccess = () => {
  return (
    <AuthComponent>
      <MaxWidthWrapper>
        <Header />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '60px',
          }}
        >
          <Typography className={style.moviebooktext} gutterBottom>
            Movie is booked
          </Typography>

          <Image src={bookedlogo} alt="bookedImage" />

          <Typography className={style.moviebooktext2} gutterBottom>
            Lorem ipsum dolor sit amet. Et velit quos et debitis quia et consectetur pariatur et
            totam pariatur.
          </Typography>

          <Button
            variant="outlined"
            className={style.btndownloadTicket}
            // onClick={handleBookTicket}
          >
            Download ticket here
          </Button>
        </div>
        <Footer />
        {/* </div> */}
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Paymentsuccess;
