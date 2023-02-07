import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from '../../../styles/homepage.module.css';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { moviesListing, theatreListing } from '../../data/mainData';

const SwiperImage = () => {
  const router = useRouter();

  const handleClickImage = (e: any, slug: any, items: any) => {
    console.log('first', slug, items);
    router.push(`./movies/${slug}`);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          slidesPerGroup={2}
          style={{ marginTop: '90px' }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {moviesListing.map((item, ind) => {
            if (item.flag == 'PRIMARY') {
              return (
                <>
                  <SwiperSlide
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={item.linkImg}
                      alt="data"
                      width={500}
                      height={700}
                      style={{ borderRadius: '15px', cursor: 'pointer' }}
                      className={style.imageslidertop}
                      onClick={(e) => handleClickImage(e, item.slug, item)}
                    />

                    <Box>
                      <Typography
                        variant="h3"
                        className="moviesh5text"
                        sx={{
                          fontFamily: 'system-ui',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: { lg: '36px', xs: '27px' },
                          // fontSize: '36px',
                          textAlign: 'center',
                          lineHeight: { lg: '42px', xs: '42px' },
                          color: '#333333',
                          transform: 'rotate(0.51deg)',
                          marginTop: { lg: '52px', xs: '40px' },
                          // marginTop: '52px'
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                      {theatreListing.map((data, i) => {
                        console.log('gett', item.category, data.id);
                        if (item.category.includes(data.id)) {
                          return (
                            <>
                              <Box
                                sx={{
                                  backgroundColor: '#F2C46F',
                                  borderRadius: '4px',
                                  width: 'max-content',
                                  margin: '2px',
                                  // marginTop: '25px'
                                  marginTop: { lg: '25px', xs: '18px' },
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: 'system-ui',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { lg: '12px', xs: '9px' },
                                    // fontSize: '12px',
                                    textAlign: 'center',
                                    lineHeight: { lg: '24px', xs: '30px' },
                                    // lineHeight: '24px',
                                    color: '#FFFFFF',
                                    padding: { lg: '0px 5px 0px 5px', xs: '0px 5px 1px 3px' },
                                    // padding: '0px 5px 0px 5px',
                                  }}
                                >
                                  {data.shortForm}
                                </Typography>
                              </Box>
                            </>
                          );
                        }
                      })}
                    </Box>
                  </SwiperSlide>
                </>
              );
            }
          })}
        </Swiper>
      </Box>
    </>
  );
};

export default SwiperImage;
