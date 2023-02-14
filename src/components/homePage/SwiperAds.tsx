import React from 'react';
import Image from 'next/image';
import style from '../../../styles/homepage.module.css';
import Box from '@mui/material/Box';

import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { adsData } from '../../data/mainData';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SwiperAds = () => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            zIndex: '10',
            cursor: 'pointer',
            display: { lg: 'block', xs: 'none' },
            right: { lg: '-30px', xs: '0px' },
            borderRadius: '50px',
            width: '60px',
            height: '60px',
            top: '40%',
            background: '#FFFFFF',
            filter:
              'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1))',
          }}
          className="swiper-button image-swiper-button-next"
        >
          <ChevronRightIcon
            sx={{ color: '#333333', margin: '15px', height: '30px', width: '30px' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            display: { lg: 'block', xs: 'none' },
            borderRadius: '50px',
            width: '60px',
            left: { lg: '-30px', xs: '0px' },
            height: '60px',
            zIndex: 10,
            top: '40%',
            background: '#FFFFFF',
            filter:
              'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1))',
            cursor: 'pointer',
          }}
          className="swiper-button image-swiper-button-prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ color: '#333333', margin: '15px', height: '30px', width: '30px' }}
          />
        </Box>
        <Swiper
          // navigation={true}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
        >
          {adsData.map((ad, ind) => {
            return (
              <>
                <Box>
                  <SwiperSlide>
                    <Image
                      src={ad.adsImage}
                      alt="datas"
                      width={1400}
                      height={320}
                      className={style.imageslidermid}
                    />
                  </SwiperSlide>
                </Box>
              </>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};

export default SwiperAds;
