import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from '../styles/confirmPayment.module.css';
import { Alert, Box, Button, Chip, Divider, Snackbar, TextField, Typography } from '@mui/material';
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

const Confirmpayment = () => {
  const router = useRouter();

  const [btn, setBtn] = useState<boolean>(true);
  const [warn, setWarn] = useState<boolean>(false);
  const [warnServerity, setWarnServerity] = useState<string>();
  const [warnMsg, setWarnMsg] = useState<string>();
  const [coupenPrice, setCoupenPrice] = useState<number>(0);

  const [coupenText, setCoupenText] = useState<string>();
  const [coupenPriceText, setCoupenPriceText] = useState<number>();

  const [movieShowData, setMovieShowData] = useState<moviesListingType | undefined>();
  const [theatreShowData, setTheatreShowData] = useState<theatreListingType | undefined>();

  //Redux Setup
  //   let selectedMovieShowData = useSelector(
  //     (state) => state.selectedMovieData.selectedMovieData
  //   );

  // //Redux Setup
  let selectedMovieShowData = useSelector(state => state.SelectedShowSlice);

  //   const selectedShow = useSelector((state) => state.showData.selectedData);

  useEffect(() => {
    // console.log('selectedMovieShowData'), selectedMovieShowData.movieId;
    if (selectedMovieShowData.movieId) {
      moviesListing.map(data => {
        if (data.id === selectedMovieShowData?.movieId) {
          setMovieShowData(data);
        }
      });

      theatreListing.map(data => {
        if (data.id === selectedMovieShowData?.theatreId) {
          // console.log('dta get--->', data);
          data.show.map(time => {
            if (time.name === selectedMovieShowData?.showType) {
              console.log('getting Time---1', time);
              // console.log('first', time);
            }
          });
        }
      });
    }
  }, []);

  const handleBookTicket = () => {
    router.push('./paymentsuccess/');
  };

  const handlebackpage = () => {
    router.back();
  };

  const AddCoupen = () => {
    // console.log('getValue', document.getElementById('standard-basic').value);
    setCoupenText(document.getElementById('standard-basic').value);

    if (selectedMovieShowData.total > coupenPriceText) {
      coupenList.map(item => {
        if (document.getElementById('standard-basic').value === item.name) {
          console.log('OK');
          setCoupenPrice(item.price);
          // setWarn(true);
          // setWarnServerity('success');
          // setWarnMsg('Successfully Applied');
          setBtn(false);
        } else {
          console.log('not OK');
          // setWarnMsg('Coupen Not Found');
          // setWarn(true);
          // setWarnServerity('error');
        }
      });

      if (
        document.getElementById('standard-basic').value === 'FLAT100' ||
        document.getElementById('standard-basic').value === 'FLAT50'
      ) {
        setWarn(true);
        setWarnServerity('success');
        setWarnMsg('Successfully Applied');
        console.log('data');
      } else {
        setWarnMsg('Coupen Not Found');
        setWarn(true);
        setWarnServerity('error');
      }
    } else {
      setWarnMsg('Coupen Not Applicable');
      setWarn(true);
      setWarnServerity('error');
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
          <Box sx={{ width: { lg: '40%', xs: '100%' }, paddingTop: '50px' }}>
            <div style={{ paddingBottom: '30px' }}>
              <Typography className={style.confirmText1} gutterBottom>
                confirm booking
              </Typography>
            </div>

            <div>
              <Typography className={style.confirmText2} gutterBottom>
                Detail Jadwal
              </Typography>
            </div>

            <Box sx={{ paddingRight: { lg: '80px', xs: '10px' } }}>
              <Typography className={style.confirmText3} gutterBottom>
                Film name
              </Typography>

              {movieShowData?.title && (
                <Typography className={style.confirmText3name} gutterBottom>
                  {movieShowData?.title}
                </Typography>
              )}
            </Box>

            <Divider style={{ width: '85%' }} />

            {/* div2 */}

            <div style={{ paddingRight: '80px', paddingTop: '20px' }}>
              <Typography className={style.confirmText3} gutterBottom>
                date
              </Typography>
              {selectedMovieShowData.showTime && (
                <Typography className={style.confirmText3name} gutterBottom>
                  {/* wednesday, 17 DEcEMBER 2021 */}
                  {format(selectedMovieShowData?.showTime, 'EEEE')},
                  {format(selectedMovieShowData?.showTime, 'd LLLL')} -{' '}
                  {format(selectedMovieShowData?.showTime, 'y')}
                </Typography>
              )}
            </div>
            <Divider style={{ width: '85%' }} />
            {/* div3 */}

            <div
              style={{
                paddingRight: '80px',
                paddingTop: '20px',
                display: 'flex'
              }}>
              <div>
                <Typography className={style.confirmText3} gutterBottom>
                  Seat
                </Typography>

                <Typography className={style.confirmText3name} gutterBottom>
                  {selectedMovieShowData?.showType}
                </Typography>
              </div>
              <div style={{ paddingLeft: '80px' }}>
                <Typography className={style.confirmText3} gutterBottom>
                  Time
                </Typography>
                {selectedMovieShowData.showTime && (
                  <Typography className={style.confirmText3name} gutterBottom>
                    {(selectedMovieShowData?.showTime).getHours()}:00
                    {/* {option.time.getHours()}:00 */}
                  </Typography>
                )}
              </div>
            </div>
            <Divider style={{ width: '85%' }} />
            {/* div4 */}

            {/* <div style={{ paddingRight: '80px', paddingTop: '20px' }}>
              <Typography className={style.confirmText3} gutterBottom>
                Ticket ({selectedMovieShowData.selectedSeat.length})
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {selectedMovieShowData?.selectedSeat.map((data, i) => {
                  return (
                    <>
                      <Typography className={style.confirmText3name} gutterBottom>
                        {data.name}
                        {i == selectedMovieShowData?.selectedSeat.length - 1 ? '' : ','}
                      </Typography>
                    </>
                  );
                })}
              </Box>
            </div> */}
            <Divider style={{ width: '85%' }} />

            <div
              style={{
                paddingRight: '80px',
                paddingTop: '50px',
                display: 'flex'
              }}>
              <ArrowBackIcon onClick={handlebackpage} className={style.arrowbackbtn} />
              <Typography className={style.confirmText4} gutterBottom>
                return
              </Typography>
            </div>
          </Box>

          <Box
            sx={{
              width: { lg: '60%', xs: '100%' },
              display: 'flex',
              justifyContent: { lg: 'end' }
            }}>
            <div className={style.divconfirmpapermain}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  paddingLeft: '28px',
                  paddingRight: '38px'
                }}>
                <Typography className={style.confirmordertext1} gutterBottom>
                  confirm Order
                </Typography>

                <Typography className={style.confirmorderdetails} gutterBottom>
                  Details
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography className={style.confirmordertext2} gutterBottom>
                    REGULAR SEAT
                  </Typography>

                  <Typography className={style.confirmordertext2} gutterBottom>
                    Rp. 50.000
                    {/* Rp.{selectedMovieShowData.ticketPrice} */}
                    <span style={{ fontWeight: 'bold', paddingLeft: '10px' }}>
                      X{selectedMovieShowData?.selectedSeats.length}
                    </span>
                  </Typography>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '30px'
                  }}></div>

                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                  <Typography className={style.confirmordertext2} gutterBottom>
                    Sub Total
                  </Typography>

                  <Typography className={style.confirmordertext2} gutterBottom>
                    {/* Rp.{selectedMovieShowData.total}.000 */}
                    Rp.2000
                  </Typography>
                </Box>

                <Typography className={style.confirmorderdetails} gutterBottom>
                  Promo & Voucher
                </Typography>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '10px',
                    alignItems: 'center'
                  }}>
                  {btn ? (
                    <>
                      <TextField
                        id="standard-basic"
                        onChange={e => handleChangeCoupenField(e)}
                        // label="Coupen Code"
                        variant="outlined"
                        inputProps={{
                          sx: {
                            padding: '10px'
                          }
                        }}
                        // sx={{ }}
                      />

                      <Button
                        sx={{ backgroundColor: '#1a2c50', padding: '10px', height: 'fit-content' }}
                        onClick={AddCoupen}
                        variant="contained">
                        <AddIcon sx={{ mr: 1 }} />
                        apply coupen
                      </Button>
                    </>
                  ) : (
                    <>
                      <Chip
                        label={coupenText}
                        variant="outlined"
                        // onClick={handleDeleteCoupen}
                        onDelete={handleDelete}
                      />
                    </>
                  )}
                </div>

                {!btn && (
                  <Box
                    sx={{
                      display: 'flex',
                      paddingBottom: '20px',
                      justifyContent: 'space-between'
                    }}>
                    {/* {coupenList.map((data) => {
                    return (
                      <>
                      <Typography
                      className={style.confirmordertext2coupen}
                      sx={{ color: 'blue' }}
                      gutterBottom
                      >
                      {data.name}
                      </Typography>
                      </>
                      );
                    })} */}

                    <Typography className={style.confirmordertext2} gutterBottom>
                      {coupenText}
                    </Typography>

                    <Typography className={style.confirmordertext2} gutterBottom>
                      -{coupenPrice}.000
                    </Typography>
                  </Box>
                )}

                <Divider />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography className={style.confirmordertotal} gutterBottom>
                    Total
                  </Typography>
                  <Typography className={style.confirmordertotal} gutterBottom>
                    {/* Rp. {selectedMovieShowData.total - coupenPrice}.000 */}
                    2000.00
                  </Typography>
                </div>
                <Divider />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography className={style.confirmorderpaymentmode} gutterBottom>
                    payment mode
                  </Typography>
                  <Typography className={style.paymentmodecard} gutterBottom>
                    Debit Card
                  </Typography>
                </div>

                <Typography className={style.paymentmodecardbank} gutterBottom>
                  DANA
                </Typography>

                <Button
                  variant="contained"
                  className={style.btnbookTicket}
                  onClick={handleBookTicket}>
                  Book Ticket
                </Button>
              </div>
            </div>
          </Box>
        </Box>
        <Footer />
        {/* </div> */}
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Confirmpayment;
