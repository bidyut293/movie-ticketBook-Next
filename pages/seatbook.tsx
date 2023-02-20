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

  // const [totalSeats, setTotalSeats] = useState<Array<{ id: string; name: string }>>([]);
  // const [bookedSeats, setBookedSeats] = useState<Array<{ id: string; name: string }>>([]);
  // const [selectedSeats, setSelectedSeats] = useState<Array<{ id: string; name: string }>>([]);

  // const selectSeatHandler = (data: { id: string; name: string }) => {
  //   setSelectedSeats(prevValue => {
  //     return [...prevValue, data];
  //   });
  // };

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
    // if (localStorage.getItem('selectedData')) {
    //   let seatData = JSON.parse(localStorage.getItem('selectedData'));
    //   let idArray: any = [];
    //   let nameArray: any = [];
    //   setSeatData(seatDatas);
    //   setTime(seatData.selectedTime);
    //   setTimeArray(seatData.showTimeAll);
    //   setPrice(seatData.ticketPrice);
    //   if (seatData) {
    //     seatData.selectedSeat.map(data => {
    //       idArray.push(data.id);
    //       nameArray.push(data.name);
    //     });
    //     setSeatId(idArray);
    //     setSeatName(nameArray);
    //   }
    // } else {
    setSeatData(seatDatas);
    console.log('selectedMovieShowData', selectedMovieShowData);
    setMovieShowData(selectedMovieShowData);
    // setTime(selectedMovieShowData.selectedTime);
    // setTimeArray(selectedMovieShowData.showTimeAll);
    // setPrice(selectedMovieShowData.ticketPrice);
    // setTime();
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
                // console.log(
                //   'new Date',
                //   new Date(
                //     getYear(selectedMovieShowData?.showTime),
                //     getMonth(selectedMovieShowData?.showTime),
                //     getDate(selectedMovieShowData?.showTime),
                //     item.time.getHours(),
                //     0
                //   )
                // );
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
    router.push('./confirmpayment/');
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
        {/* <Box className={style.divmainseatbook}>
          <Box>
            <Typography className={style.selectseattext} color="text.secondary" gutterBottom>
              Select seat
            </Typography>

            <Typography
              className={style.selectseattext2}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom>
              Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { lg: 'row', xs: 'column' },
                paddingLeft: { lg: '30px', xs: '0px' },
                paddingRight: { lg: '30px', xs: '0px' },
                paddingTop: { lg: '60px', xs: '30px' },
                paddingBottom: '35px'
              }}>
              <Box sx={{ cursor: 'pointer' }}>
                {timeShow ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <Image
                      src={clocklogo}
                      alt="clocklogo"
                      onClick={handleTimeSelect}
                      style={{ cursor: 'pointer' }}
                    />
                    <Typography
                      sx={{
                        fontFamily: 'system-ui',
                        fontWeight: 400,
                        fontSize: '25px',
                        marginBottom: '0px',
                        cursor: 'pointer'
                      }}
                      onClick={handleTimeSelect}
                      gutterBottom>
                      {fromUnixTime(time).getHours()}:00
                    </Typography>
                    <Box>
                      <KeyboardArrowUpIcon
                        sx={{ width: '35px', height: '35px', cursor: 'pointer' }}
                        onClick={handleTimeSelect}
                      />
                    </Box>
                  </Box>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        width: '410px',
                        padding: '15px',
                        background: '#FFFFFF',
                        boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.3)',
                        borderRadius: '12px'
                      }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                        <Image
                          src={clocklogo}
                          alt="clocklogo"
                          onClick={handleTimeSelect}
                          style={{ cursor: 'pointer' }}
                        />

                        <Typography
                          sx={{
                            fontFamily: 'system-ui',
                            fontWeight: 500,
                            fontSize: '25px',
                            marginBottom: '0px',
                            cursor: 'pointer'
                          }}
                          onClick={handleTimeSelect}
                          gutterBottom>
                          {fromUnixTime(time).getHours()}:00
                        </Typography>
                        <Box>
                          <KeyboardArrowDownSharpIcon
                            sx={{ width: '35px', height: '35px', cursor: 'pointer' }}
                            onClick={handleTimeSelect}
                          />
                        </Box>
                      </Box>
                      <Box
                        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {timeArray.map((data, ind) => {
                          return (
                            <>
                              <Button
                                sx={{
                                  border:
                                    time === getUnixTime(data.time) ? '0px' : '1px solid #5A637A',
                                  borderRadius: '5px',
                                  color: time === getUnixTime(data.time) ? '#fff' : '#1a2c50',
                                  fontSize: '17px',
                                  backgroundColor:
                                    time === getUnixTime(data.time) ? '#1a2c50' : '#fff',
                                  '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#1a2c50',
                                    fontSize: '18px'
                                  },
                                  margin: '10px',
                                  marginTop: '10px',
                                  marginLeft: '5px'
                                }}
                                disabled={isPast(data.time)}
                                onClick={() => handleClickSelectedTime(data.time)}
                                id="card">
                                {data.time.getHours()}:00
                              </Button>
                            </>
                          );
                        })}
                      </Box>
                    </Box>
                  </>
                )}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: { lg: '0px', xs: '30px' }
                }}>
                <Box sx={{ display: 'flex', marginLeft: { lg: '15px', xs: '10px' } }}>
                  <Box className={style.divbox1}></Box>
                  <Typography className={style.textbox1} gutterBottom>
                    Booked
                  </Typography>
                </Box>

                <Box style={{ display: 'flex', marginLeft: '15px' }}>
                  <Box className={style.divbox2}></Box>
                  <Typography className={style.textbox2} gutterBottom>
                    Available
                  </Typography>
                </Box>

                <Box style={{ display: 'flex', marginLeft: '15px' }}>
                  <Box className={style.divbox3}></Box>
                  <Typography className={style.textbox3} gutterBottom>
                    Selected
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box className={style.divcardseatmain}>
                {seatData.map((data, ind) => {
                  const isBooked = !!bookedSeats.find(item => item.id === data.id);
                  const isSelected = !!selectedSeats.find(item => item.id === data.id);
                  return (
                    <>
                      <Box
                        style={{
                          marginRight:
                            data.name.split('').splice(1, data.name.split('').length).join('') ===
                            '10'
                              ? '100px'
                              : '0px'
                        }}>
                        <Card
                          sx={{
                            border: '1px solid #5A637A',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            backgroundColor: data.Booked
                              ? '#1a2c50'
                              : seatId.includes(data.id)
                              ? '#118EEA'
                              : ''
                          }}
                          className={style.cardboxseat}
                          id="card"
                          onClick={() => handleDateClick(data)}>
                          <CardContent
                            style={{
                              padding: '9px',
                              display: 'flex',
                              justifyContent: 'center'
                            }}>
                            <Typography
                              className={style.seatText2}
                              sx={{
                                color: data.Booked
                                  ? '#fff'
                                  : seatId.includes(data.id)
                                  ? '#fff'
                                  : '#1a2c50'
                              }}
                              gutterBottom>
                              {data.name}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box> */}
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
