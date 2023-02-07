import React from 'react';
import Image from 'next/image';
import style from '../../../styles/homepage.module.css';
import Box from '@mui/material/Box';

import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { adsData } from '../../data/mainData';

const SwiperAds = () => {
  return (
    <>
      <Box>
        <Swiper
          navigation={true}
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
