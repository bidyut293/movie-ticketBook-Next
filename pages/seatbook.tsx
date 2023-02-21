import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from '../styles/seatbook.module.css';

import AuthComponent from '../src/components/common/AuthComponent';

import { Button, Card, CardContent, Snackbar, TextField, Typography } from '@mui/material';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

import clocklogo from '../public/images/homepageImage/homePage/clock.png';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert';

import { useSelector, useDispatch } from '../src/store/index';

// import { useDispatch } from '../src/store';
import { getData } from '../src/store/reducers/dataSelected/dataSelected.slice';

import { seatDatas, theatreListing } from '../src/data/mainData';
import { seatDatasType } from '../src/types/constants/seatDatas.type';

import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

import { getUnixTime, fromUnixTime, getHours, isPast, getYear, getMonth, getDate } from 'date-fns';
import NotFoundMsg from '../src/components/common/NotFoundMsg';

import {
  SelectedShowReduxType,
  setSelectedShow
} from '../src/store/reducers/selected-show/SelectedShow.slice';
import Seat from '../src/components/seatBook-page/Seat';

const Seatbook = () => {
  const router = useRouter();

  // //Redux Setup
  let selectedMovieShowData = useSelector(state => state.SelectedShowSlice);

  const dispatch = useDispatch();

  const [seatData, setSeatData] = useState<Array<seatDatasType>>([]);

  const [showKursi, setShowKursi] = useState<boolean>(false);
  const [time, setTime] = useState<Date | null>(selectedMovieShowData.showTime);

  const [passingData, setPassingData] = useState([]);
  const [seatId, setSeatId] = useState<Array<number>>([]);
  const [seatName, setSeatName] = useState<Array<string>>([]);
  const [timeArray, setTimeArray] = useState<Array<any>>([]);
  const [price, setPrice] = useState<number>(0);
  const [timeShow, setTimeShow] = useState<boolean>(true);

  const [movieShowData, setMovieShowData] = useState<SelectedShowReduxType>();
  const [isShowTime, setIsShowTime] = useState<boolean>(false);

  // let tempArray: any = [];
  useEffect(() => {
    // if (selectedMovieShowData?.movieId > 0) {
    setSeatData(seatDatas);
    console.log('selectedMovieShowData', selectedMovieShowData);
    setMovieShowData(selectedMovieShowData);

    console.log('timettttt---', isShowTime);
    let tempArray: any = [];
    theatreListing.map(data => {
      if (data.id === selectedMovieShowData?.theatreId) {
        // console.log('dta get--->', data);
        data.show.map(time => {
          if (time.name === selectedMovieShowData?.showType) {
            console.log('getting Time---', time);
            setPrice(time.time[0].price);

            console.log('first', time.time);
            time.time.map(item => {
              console.log('item1111', item);
              if (selectedMovieShowData?.showTime) {
                tempArray.push(
                  new Date(
                    getYear(selectedMovieShowData?.showTime),
                    getMonth(selectedMovieShowData?.showTime),
                    getDate(selectedMovieShowData?.showTime),
                    item.time.getHours(),
                    0
                  )
                );
              }
            });
          }
        });
      }
    });

    console.log('tempArray', tempArray);

    setTimeArray(tempArray);
    // } else {
    //   let seatData = JSON.parse(localStorage.getItem('selectedShowData'));
    //   console.log('seatData', seatData);

    //   setSeatData(seatDatas);
    //   setMovieShowData(seatData);

    //   let tempArray: any = [];
    //   theatreListing.map(data => {
    //     if (data.id === seatData.theatreId) {
    //       // console.log('dta get--->', data);
    //       data.show.map(time => {
    //         if (time.name === seatData.showType) {
    //           console.log('getting Time---', time);
    //           setPrice(time.time[0].price);

    //           console.log('first', time.time);
    //           time.time.map(item => {
    //             console.log('item1111', item);
    //             if (seatData.showTime) {
    //               tempArray.push(
    //                 new Date(
    //                   getYear(seatData.showTime),
    //                   getMonth(seatData.showTime),
    //                   getDate(seatData.showTime),
    //                   item.time.getHours(),
    //                   0
    //                 )
    //               );
    //             }
    //           });
    //         }
    //       });
    //     }
    //   });
    //   setTimeArray(tempArray);
    // }
  }, []);

  useEffect(() => {
    dispatch(
      setSelectedShow({
        movieId: selectedMovieShowData.movieId,
        price: selectedMovieShowData.price,
        showTime: time,
        showType: selectedMovieShowData.showType,
        theatreId: selectedMovieShowData.theatreId,
        selectedSeats: seatId
      })
    );
  }, [seatId]);

  // let selectedSeatArray: any[] = [];
  // useEffect(() => {
  //   if (seatId.length > 0) {
  //     seatData.map((data, i) => {
  //       if (seatId.includes(data.id)) {
  //         selectedSeatArray.push(data);
  //       }
  //     });
  //   }
  // }, [seatId]);

  // const handleClickBooking = () => {
  //   localStorage.setItem('selectedData', JSON.stringify(passingData));
  //   dispatch(
  //     getData({
  //       movie: passingData
  //     })
  //   );
  //   router.push('./confirmpayment/');
  // };

  // const handleDateClick = (data: any) => {
  //   if (!data.Booked) {
  //     if (seatId.includes(data.id)) {
  //       setSeatId(seatId.filter(obj => obj !== data.id));
  //       setSeatName(seatName.filter(obj => obj !== data.name));
  //     } else {
  //       if (seatId.length < 6) {
  //         setSeatId([...seatId, data.id]);
  //         setSeatName([...seatName, data.name]);
  //       } else {
  //         setShowKursi(true);
  //       }
  //     }
  //   }
  // };

  // const handleTimeSelect = () => {
  //   setTimeShow(!timeShow);
  // };

  // const handleClickSelectedTime = (time: any) => {
  //   setTime(getUnixTime(time));
  // };

  // const handleClose = () => {
  //   setShowKursi(false);
  // };

  const selectedShowTimeHandle = () => {
    console.log('movieShowData', movieShowData);
    setIsShowTime(true);
  };

  const handleClickSelectedTime = (selectTime: Date) => {
    setTime(selectTime);
    setIsShowTime(false);
    dispatch(
      setSelectedShow({
        movieId: selectedMovieShowData.movieId,
        price: selectedMovieShowData.price,
        showTime: selectTime,
        showType: selectedMovieShowData.showType,
        theatreId: selectedMovieShowData.theatreId,
        selectedSeats: seatId
      })
    );
  };

  const handleSelectSeat = (data: seatDatasType) => {
    if (!data.Booked) {
      if (seatId.includes(data.id)) {
        setSeatId(seatId.filter(obj => obj !== data.id));
        setSeatName(seatName.filter(obj => obj !== data.name));
      } else {
        if (seatId.length < 6) {
          setSeatId([...seatId, data.id]);
          setSeatName([...seatName, data.name]);
        } else {
          setShowKursi(true);
        }
      }
    }
  };

  const handleClickConfirmBooking = () => {
    if (seatId.length > 0) {
      localStorage.setItem(
        'selectedShowData',
        JSON.stringify({
          movieId: selectedMovieShowData.movieId,
          price: selectedMovieShowData.price,
          showTime: time,
          showType: selectedMovieShowData.showType,
          theatreId: selectedMovieShowData.theatreId,
          selectedSeats: seatId
        })
      );

      router.push('./confirmpayment/');
    }
  };

  const handleShowTime = () => {
    setIsShowTime(false);
  };

  const handleClose = () => {
    setShowKursi(false);
  };

  return (
    <AuthComponent>
      <MaxWidthWrapper>
        {showKursi && (
          <Snackbar open={showKursi} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              You Reach Maximum number of seat Booking
            </Alert>
          </Snackbar>
        )}
        <Header />
        {seatData && (
          <Seat
            movieShowData={movieShowData}
            seatData={seatData}
            timeArray={timeArray}
            time={time}
            isShowTime={isShowTime}
            seatId={seatId}
            selectedShowTimeHandle={selectedShowTimeHandle}
            handleClickSelectedTime={handleClickSelectedTime}
            handleShowTime={handleShowTime}
            handleSelectSeat={handleSelectSeat}
          />
        )}

        <Box className={style.divScreentext}>
          <Typography
            className={style.textscreen}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom>
            Screen this side
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { lg: 'row', xs: 'column' },
            justifyContent: 'space-evenly',
            paddingTop: '50px',
            paddingBottom: { lg: '80px', xs: '40px' }
          }}>
          <Box className={style.div1showrupees}>
            <Typography className={style.toatalText} gutterBottom>
              Total
            </Typography>
            <Typography className={style.totalseatbook} gutterBottom>
              Rp.{seatId.length * price}
            </Typography>
          </Box>

          <Box className={style.div1showrupees}>
            <Typography className={style.toatalText} gutterBottom>
              Kursi
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography className={style.totalseatbook} gutterBottom>
                {seatName.toString()}
              </Typography>
            </Box>
          </Box>
          <Box className={style.btndiv}>
            <Button variant="outlined" className={style.btn1} onClick={() => router.back()}>
              Change date
            </Button>
            <Button variant="contained" className={style.btn2} onClick={handleClickConfirmBooking}>
              Confirm
            </Button>
          </Box>
        </Box>
        <Footer />
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Seatbook;
