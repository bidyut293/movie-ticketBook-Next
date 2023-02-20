import { Box, Button, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { format, fromUnixTime, isEqual } from 'date-fns';
import style from './DateList.module.css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dateListHandle } from '../../../../utils/dateListHandle';

interface DateListComponentProps {
  selectedDate: Date;
  changeSelectedDateHandle: (newDate: Date) => void;
  warn: boolean;
}

const DateListComponent: React.FC<DateListComponentProps> = ({
  selectedDate,
  changeSelectedDateHandle,
  warn
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          position: 'relative'
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: { lg: '40%', xs: '55%' },
            zIndex: '10',
            cursor: 'pointer',
            right: { lg: '0px', xs: '10px' }
          }}
          className="swiper-button image-swiper-button-next">
          <ChevronRightIcon sx={{ color: '#333333' }} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '55%', lg: '40%' },
            zIndex: '10',
            cursor: 'pointer',
            left: '0px'
          }}
          className="swiper-button image-swiper-button-prev">
          <KeyboardArrowLeftIcon style={{ color: '#333333' }} />
        </Box>
        <Box sx={{ width: '100%', marginTop: { xs: '30px', lg: '0px' } }}>
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            slidesPerGroup={1}
            breakpoints={{
              0: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              500: {
                slidesPerView: 3,
                slidesPerGroup: 1
              },
              650: {
                slidesPerView: 4,
                slidesPerGroup: 1
              },
              800: {
                slidesPerView: 5,
                slidesPerGroup: 1
              }
            }}
            pagination={{
              clickable: true
            }}
            navigation={{
              nextEl: '.image-swiper-button-next',
              prevEl: '.image-swiper-button-prev',
              disabledClass: 'swiper-button-disabled'
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            {dateListHandle().map((date, index) => {
              return (
                <Box key={index} sx={{ width: '60%' }}>
                  <SwiperSlide
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                    <Button
                      sx={{
                        border: '1px solid #5A637A',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: isEqual(date, selectedDate) ? '#1a2c50' : '#fff'
                      }}
                      className={style.cardDate}
                      onClick={() => changeSelectedDateHandle(date)}>
                      <Typography
                        variant="h5"
                        className={style.DateText}
                        sx={{
                          fontSize: 16,
                          padding: '10px',
                          fontFamily: 'system-ui',
                          color: '#efefef',
                          fontWeight: '500',
                          lineHeight: '19px'
                        }}>
                        {format(date, 'd LLL')}
                      </Typography>

                      <Typography
                        variant="h5"
                        className={style.DateText2}
                        sx={{
                          fontSize: 14,
                          paddingBottom: '6px',
                          color: isEqual(date, selectedDate) ? '#fff' : '#333333',
                          '&:hover': {
                            color: '#efefef'
                          }
                        }}>
                        {format(date, 'E')}
                      </Typography>
                    </Button>
                  </SwiperSlide>
                </Box>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};
export default DateListComponent;
