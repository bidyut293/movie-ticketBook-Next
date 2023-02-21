import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from '../styles/confirmPayment.module.css';
import {
  Alert,
  AlertColor,
  Box,
  Button,
  Chip,
  Divider,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useSelector } from 'react-redux';
// import { movieDataActions } from '../../src/store';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

import { coupenList } from '../src/data/mainData';

import { useSelector } from '../src/store/index';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import AuthComponent from '../src/components/common/AuthComponent';

import { moviesListing } from '../src/data/mainData';
import { moviesListingType } from '../src/types/constants/movieListing.type';

import { theatreListingType } from '../src/types/constants/theatreListing.type';
import { theatreListing } from '../src/data/mainData';

import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import {
  hoursToMinutes,
  getYear,
  getTime,
  getHours,
  getUnixTime,
  format,
  addDays,
  eachDayOfInterval,
  fromUnixTime,
  addHours,
  getMonth,
  getDay,
  isPast,
  getDate
} from 'date-fns';
import { padding } from '@mui/system';
import { seatDatas } from '../src/data/mainData';
import DetailsPage from '../src/components/confirmPayment-page/detailsPage';
import Payment from '../src/components/confirmPayment-page/Payment';

const Confirmpayment = () => {
  const router = useRouter();

  const [btn, setBtn] = useState<boolean>(true);
  const [warn, setWarn] = useState<boolean>(false);
  const [warnServerity, setWarnServerity] = useState<AlertColor | undefined>();
  const [warnMsg, setWarnMsg] = useState<string>();
  const [coupenPrice, setCoupenPrice] = useState<number>(0);

  const [coupenPriceText, setCoupenPriceText] = useState<number | undefined>();

  const [movieShowData, setMovieShowData] = useState<moviesListingType | undefined>();
  const [theatreShowData, setTheatreShowData] = useState<theatreListingType | undefined>();

  const [seatNameArray, setSeatNameArray] = useState<Array<string>>([]);
  const [price, setPrice] = useState<number>(0);
  const [coupen, setCoupen] = useState<string | undefined>();

  // //Redux Setup
  let selectedMovieShowData = useSelector(state => state.SelectedShowSlice);

  useEffect(() => {
    if (selectedMovieShowData.movieId) {
      moviesListing.map(data => {
        if (data.id === selectedMovieShowData?.movieId) {
          setMovieShowData(data);
        }
      });

      theatreListing.map(data => {
        if (data.id === selectedMovieShowData?.theatreId) {
          data.show.map(time => {
            if (time.name === selectedMovieShowData?.showType) {
              console.log('getting Time---1', time);
              setPrice(time.time[0].price);
            }
          });
        }
      });

      let tempNameArray: string[] = [];
      seatDatas.map(data => {
        if (selectedMovieShowData?.selectedSeats.includes(data.id)) {
          tempNameArray.push(data.name);
        }
      });

      setSeatNameArray(tempNameArray);
    }
  }, []);

  const handleBookTicket = () => {
    router.push('./paymentsuccess/');
  };

  const handlebackpage = () => {
    router.back();
  };

  const AddCoupen = () => {

    if (coupenPriceText) {
      if (
        selectedMovieShowData?.price * selectedMovieShowData?.selectedSeats.length >
        coupenPriceText
      ) {
        coupenList.map(item => {
          if (coupen === item.name) {
            console.log('OK');
            setCoupenPrice(item.price);
            setBtn(false);
          } else {
            console.log('not OK');
          }
        });
        if (coupen === 'FLAT100' || coupen === 'FLAT50') {
          setWarn(true);
          setWarnServerity('success');
          setWarnMsg('Successfully Applied');
          console.log('data');
        } else {
          setWarnMsg('Coupon Not Found');
          setWarn(true);
          setWarnServerity('error');
        }
      } else {
        setWarnMsg('Coupen Not Applicable');
        setWarn(true);
        setWarnServerity('error');
      }
    }
    // if(coupenList.includes())
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
    // setBtn(false);
    setWarn(true);
    setWarnMsg('Coupen Remove');
    setWarnServerity('success');
    setCoupenPrice(0);
    setBtn(true);
  };

  const handleClose = () => {
    setWarn(false);
  };

  const handleChangeCoupenField = (e: any) => {
    setCoupen(e.target.value);
    coupenList.map(data => {
      if (e.target.value === data.name) {
        setCoupenPriceText(data.price);
      }
    });
  };

  return (
    <AuthComponent>
      <MaxWidthWrapper>
        {warn && (
          <Snackbar open={warn} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={warnServerity} sx={{ width: '100%' }}>
              {warnMsg}
            </Alert>
          </Snackbar>
        )}
        <Header />
        <Box sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' } }}>
          <DetailsPage
            movieShowData={movieShowData}
            selectedMovieShowData={selectedMovieShowData}
            seatNameArray={seatNameArray}
            handlebackpage={handlebackpage}
          />

          <Payment
            selectedMovieShowData={selectedMovieShowData}
            btn={btn}
            handleChangeCoupenField={handleChangeCoupenField}
            AddCoupen={AddCoupen}
            coupen={coupen}
            handleDelete={handleDelete}
            coupenPrice={coupenPrice}
            handleBookTicket={handleBookTicket}
          />
        </Box>
        <Footer />
        {/* </div> */}
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Confirmpayment;
