import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import style from '../../../styles/seatbook.module.css';

import clocklogo from '../../../public/images/homepageImage/homePage/clock.png';
import { SelectedShowReduxType } from '../../store/reducers/selected-show/SelectedShow.slice';
import { seatDatasType } from '../../types/constants/seatDatas.type';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { timeArrayType } from '../../types/constants/timeArray.type';
import { isPast } from 'date-fns';

interface SeatProps {
  movieShowData: SelectedShowReduxType | undefined;
  seatData: Array<seatDatasType>;
  timeArray: Array<Date>;
  time: Date | null;
  isShowTime: boolean;
  seatId: Array<number>;
  selectedShowTimeHandle: () => void;
  handleClickSelectedTime: (selectTime: Date) => void;
  handleShowTime: () => void;
  handleSelectSeat: (data: seatDatasType) => void;
}

const Seat: React.FC<SeatProps> = ({
  movieShowData,
  seatData,
  timeArray,
  time,
  isShowTime,
  seatId,
  selectedShowTimeHandle,
  handleClickSelectedTime,
  handleShowTime,
  handleSelectSeat
}) => {
  console.log({ timeArray });
  console.log('vvvv', time);
  return (
    <>
      <Box className={style.divmainseatbook}>
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
              {isShowTime ? (
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
                      onClick={handleShowTime}
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
                      onClick={handleShowTime}
                      gutterBottom>
                      {time && time.getHours()}:00
                    </Typography>
                    <Box>
                      <KeyboardArrowDownSharpIcon
                        sx={{ width: '35px', height: '35px', cursor: 'pointer' }}
                        onClick={handleShowTime}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {timeArray.map((data, ind) => {
                      console.log('vvvv', data, time);
                      return (
                        <>
                          <Button
                            sx={{
                              border:
                                time === data ? '0px' : isPast(data) ? '0px' : '1px solid #5A637A',
                              borderRadius: '5px',
                              color: time === data ? '#fff' : '#1a2c50',
                              fontSize: '17px',
                              backgroundColor:
                                time === data ? '#1a2c50' : isPast(data) ? '#efefef' : '#fff',
                              '&:hover': {
                                color: '#fff',
                                backgroundColor: '#1a2c50',
                                fontSize: '18px'
                              },
                              margin: '10px',
                              marginTop: '10px',
                              marginLeft: '5px'
                            }}
                            disabled={isPast(data)}
                            onClick={() => handleClickSelectedTime(data)}
                            id="card">
                            {data.getHours()}:00
                          </Button>
                        </>
                      );
                    })}
                  </Box>
                </Box>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <Image
                      src={clocklogo}
                      alt="clocklogo"
                      onClick={selectedShowTimeHandle}
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
                      onClick={selectedShowTimeHandle}
                      gutterBottom>
                      {time && time.getHours()}:00
                    </Typography>
                    <Box>
                      <KeyboardArrowUpIcon
                        sx={{ width: '35px', height: '35px', cursor: 'pointer' }}
                        onClick={selectedShowTimeHandle}
                      />
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
                          cursor: data.Booked ? '' : 'pointer',
                          backgroundColor: data.Booked
                            ? '#1a2c50'
                            : seatId.includes(data.id)
                            ? '#118EEA'
                            : '#fff'
                        }}
                        className={style.cardboxseat}
                        id="card"
                        onClick={() => handleSelectSeat(data)}>
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
      </Box>
    </>
  );
};

export default Seat;
