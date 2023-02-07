import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import style from '../styles/confirmPayment.module.css';
import { Box, Button, Divider, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useSelector } from 'react-redux';
// import { movieDataActions } from '../../src/store';
import Header from '../src/common/Header';
import Footer from '../src/common/Footer';

import { useSelector } from '../src/store/index';

import MaxWidthWrapper from '../src/common/MaxWidthWrapper'

const Confirmpayment = () => {
  const router = useRouter();

  //Redux Setup
//   let selectedMovieShowData = useSelector(
//     (state) => state.selectedMovieData.selectedMovieData
//   );

  // //Redux Setup
  let selectedMovieShowData = useSelector(
    (state) => state.dataSelectedSlice.movie
  );

//   const selectedShow = useSelector((state) => state.showData.selectedData);

  useEffect(() => {
    console.log('selectedMovieShowData', selectedMovieShowData);
  }, []);

  const handleBookTicket = () => {
    router.push('./paymentsuccess/');
  };

  const handlebackpage = () => {
    router.push('./seatbook/');
  };

  return (
    <>
      {/* <div style={{ backgroundColor: 'white' }}> */}
      <MaxWidthWrapper>
        <Header />
        <div style={{ display: 'flex' }}>
          <div
            style={{ width: '40%', paddingTop: '50px' }}
          >
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

            <div style={{ paddingRight: '80px' }}>
              <Typography className={style.confirmText3} gutterBottom>
                Film name
              </Typography>

              <Typography className={style.confirmText3name} gutterBottom>
                {/* SPIDERMAN NO WAY HOME */}
                {selectedMovieShowData.title}
              </Typography>
            </div>

            <Divider style={{ width: '85%' }} />

            {/* div2 */}

            <div style={{ paddingRight: '80px', paddingTop: '20px' }}>
              <Typography className={style.confirmText3} gutterBottom>
                date
              </Typography>

              <Typography className={style.confirmText3name} gutterBottom>
                {/* wednesday, 17 DEcEMBER 2021 */}
                {selectedMovieShowData.day},{selectedMovieShowData.date} 2022
              </Typography>
            </div>
            <Divider style={{ width: '85%' }} />
            {/* div3 */}

            <div
              style={{
                paddingRight: '80px',
                paddingTop: '20px',
                display: 'flex',
              }}
            >
              <div>
                <Typography className={style.confirmText3} gutterBottom>
                  Seat
                </Typography>

                <Typography className={style.confirmText3name} gutterBottom>
                  {selectedMovieShowData.name2}
                </Typography>
              </div>
              <div style={{ paddingLeft: '80px' }}>
                <Typography className={style.confirmText3} gutterBottom>
                  Time
                </Typography>

                <Typography className={style.confirmText3name} gutterBottom>
                  {selectedMovieShowData.showTime}
                </Typography>
              </div>
            </div>
            <Divider style={{ width: '85%' }} />
            {/* div4 */}
            <div style={{ paddingRight: '80px', paddingTop: '20px' }}>
              <Typography className={style.confirmText3} gutterBottom>
                Ticket ({selectedMovieShowData.selectedSeat.length})
              </Typography>

              <Box sx={{display: "flex"}}>

              {selectedMovieShowData.selectedSeat.map((data, i) => {
                  return (
                  <>
                    <Typography className={style.confirmText3name} gutterBottom>
                      {data.name}{i == selectedMovieShowData.selectedSeat.length - 1 ? "" : ","}
                    </Typography>
                  </>
                );
            })}
            </Box>
            </div>
            <Divider style={{ width: '85%' }} />

            <div
              style={{
                paddingRight: '80px',
                paddingTop: '50px',
                display: 'flex',
              }}
            >
              <ArrowBackIcon
                onClick={handlebackpage}
                className={style.arrowbackbtn}
              />
              <Typography className={style.confirmText4} gutterBottom>
                return
              </Typography>
            </div>
          </div>
          <Box sx={{ width: '60%', display: 'flex', justifyContent: {lg:'end'} }}>
            <div className={style.divconfirmpapermain}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  paddingLeft: '28px',
                  paddingRight: '38px',
                }}
              >
                <Typography className={style.confirmordertext1} gutterBottom>
                  confirm Order
                </Typography>

                <Typography className={style.confirmorderdetails} gutterBottom>
                  Details
                </Typography>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography className={style.confirmordertext2} gutterBottom>
                    REGULAR SEAT
                  </Typography>

                  <Typography className={style.confirmordertext2} gutterBottom>
                    {/* Rp. 50.000 */}
                    Rp.{selectedMovieShowData.showPrice}
                    <span style={{ fontWeight: 'bold', paddingLeft: '10px' }}>
                      X{selectedMovieShowData.selectedSeat.length}
                    </span>
                  </Typography>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '30px',
                  }}
                >
                  {/* <Typography className={style.confirmordertext2} gutterBottom>
                    BIAYA LAYANAN
                  </Typography>

                  <Typography className={style.confirmordertext2} gutterBottom>
                    Rp.3.000
                    <span style={{ fontWeight: 'bold', paddingLeft: '10px' }}>
                      X3
                    </span>
                  </Typography> */}
                </div>

                <Divider />
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }} >

                <Typography className={style.confirmordertext2} gutterBottom>
                    Sub Total
                  </Typography>

                  <Typography className={style.confirmordertext2} gutterBottom>
                    Rp.{selectedMovieShowData.total}.000
                  </Typography>
                </Box>

                <Typography className={style.confirmorderdetails} gutterBottom>
                  Promo & Voucher
                </Typography>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '30px',
                  }}
                >
                  <Typography className={style.confirmordertext2} gutterBottom>
                    PROMO TIX ID
                  </Typography>

                  <Typography className={style.confirmordertext2} gutterBottom>
                    - Rp. 70.000
                  </Typography>
                </div>

                <Divider />

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography className={style.confirmordertotal} gutterBottom>
                    Total
                  </Typography>
                  <Typography className={style.confirmordertotal} gutterBottom>
                    Rp. {selectedMovieShowData.total - 70}.000
                  </Typography>
                </div>
                <Divider />

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography
                    className={style.confirmorderpaymentmode}
                    gutterBottom
                  >
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
                  onClick={handleBookTicket}
                >
                  Book Ticket
                </Button>
              </div>
            </div>
          </Box>
        </div>
        <Footer />
      {/* </div> */}
      </MaxWidthWrapper>
    </>
  );
};

export default Confirmpayment;
