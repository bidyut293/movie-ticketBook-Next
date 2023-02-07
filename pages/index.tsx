import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from '../styles/homepage.module.css'

import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../src/common/Footer'
import Header from '../src/common/Header'

import { movieData } from '../src/data/data'
import { movieDataType } from '../src/types/constants/movie.type'
import { useDispatch } from '../src/store'
import { getData } from '../src/store/reducers/dataSelected/dataSelected.slice'

// import { format } from 'date-fns'

import MaxWidthWrapper from '../src/common/MaxWidthWrapper'


interface sample_addsData {
  id: any;
  adsImage: any;
}

let AdsData: sample_addsData[] = [
  {
    id: 1,
    adsImage: 'https://i.postimg.cc/1zRSzwrZ/Ads-1.png',
  },
  {
    id: 2,
    adsImage: 'https://i.postimg.cc/j5GBy7P2/Ads-2.png',
  },
  {
    id: 3,
    adsImage: 'https://i.postimg.cc/wMX4Jb94/Ads-3.png',
  },
]


interface ActiveChatsProps {}
const Homepage: React.FC<ActiveChatsProps> = () => {
  const [page, setPage] = React.useState(false)
  const router = useRouter()
  const dispatch = useDispatch()


  const clickHandler = (value: string) =>{
    // dispatch(getData({}))
  }
  // const selectedShow = useSelector((state) => state.showData.selectedData)
  // const ctx = useContext(DataContext);
  // const [context, setContext] = useContext(Context)

  // const allData = useSelector(state.allData)

  const [primarydata, setPrimaryData] = useState<Array<movieDataType>>([])
  const [secondarydata, setSecondaryData] = useState<Array<movieDataType>>([])
  const [adData, setAdData] = useState<Array<sample_addsData>>([])
  const [selectedMovie, setSelectedMovie] = useState()

  useEffect(() => {
    // console.log(format(new Date(), "M LLL"));
    
    console.log("movieData0000",movieData)
    console.log('local', localStorage.getItem('isLogin'))

    if (localStorage.getItem('isLogin')) {
      setPage(false)

      setPrimaryData(movieData.primary)
      setSecondaryData(movieData.secondary)
      setAdData(AdsData)

    }
setPrimaryData(movieData.primary)
      setSecondaryData(movieData.secondary)
      setAdData(AdsData)    
  }, [])

  const handleClickImage = (e:any, title:any, items:any) => {
    console.log('first', title, items)
    // setContext(items)
    // dispatch(actionCreaters.Withdrawmoney)
    dispatch(getData({
      movie: items
    }))
    router.push(`./${title}`)
  }

  const handleClickSeeAll = () => {
    console.log('allMovieData', primarydata, adData)
  }

  return (
   <>
      {page ? (
        // <Loader />
        ''
      ) : (
      //   <Box sx={{ backgroundColor: 'white',
      //   //  width: {xs: '360vw'}
      //   width: {xs: '360vw',lg: '100%'}
      // }}

      <MaxWidthWrapper>
          <Header />

          <Box>
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
                {primarydata.map((item, ind) => {
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
                          style={{ borderRadius: '15px', cursor:'pointer' }}
                          className={style.imageslidertop}
                          onClick={(e) => handleClickImage(e, item.title, item)}
                        />

                        <Box>
                          <Typography
                            variant="h3"
                            className="moviesh5text"
                            sx={{
                              fontFamily: 'system-ui',
                              fontStyle: 'normal',
                              fontWeight: '700',
                              fontSize: {lg:'36px',xs: '27px'},
                              // fontSize: '36px',
                              textAlign: 'center',
                              lineHeight: {lg:'42px', xs: '42px'},
                              color: '#333333',
                              transform: 'rotate(0.51deg)',
                              marginTop: {lg:'52px',xs: '40px'},
                              // marginTop: '52px'
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex' }}>
                          <Box
                            sx={{
                              backgroundColor: '#F2C46F',
                              borderRadius: '4px',
                              width: 'max-content',
                              margin: '2px',
                              // marginTop: '25px'
                              marginTop: {lg:'25px',xs:'18px'},
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: 'system-ui',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: {lg:'12px',xs: '9px'},
                                // fontSize: '12px',
                                textAlign: 'center',
                                lineHeight: {lg:'24px',xs:'30px'},
                                // lineHeight: '24px',
                                color: '#FFFFFF',
                                padding: {lg:'0px 5px 0px 5px', xs: '0px 5px 1px 3px'}
                                // padding: '0px 5px 0px 5px',

                              }}
                            >
                              {item.category1}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: '#EC1E2B',
                              borderRadius: '4px',
                              width: 'max-content',
                              margin: '2px',
                              // marginTop: '25px',
                              marginTop: {lg:'25px',xs:'18px'},
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: 'system-ui',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: {lg:'12px',xs: '9px'},
                                // fontSize: '12px',
                                textAlign: 'center',
                                // lineHeight: '24px',
                                lineHeight: {lg:'24px',xs:'30px'},
                                color: '#FFFFFF',
                                // padding: '0px 5px 0px 5px',
                                padding: {lg:'0px 5px 0px 5px', xs: '0px 5px 1px 3px'}
                              }}
                            >
                              {item.category2}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: '#000E62',
                              borderRadius: '4px',
                              width: 'max-content',
                              margin: '2px',
                              // marginTop: '25px',
                              marginTop: {lg:'25px',xs:'18px'},
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: 'system-ui',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                // fontSize: '12px',
                                fontSize: {lg:'12px',xs: '9px'},
                                textAlign: 'center',
                                // lineHeight: '24px',
                                lineHeight: {lg:'24px',xs:'30px'},
                                color: '#FFFFFF',
                                // padding: '0px 5px 0px 5px',
                                padding: {lg:'0px 5px 0px 5px', xs: '0px 5px 1px 3px'}
                              }}
                            >
                              {item.category3}
                            </Typography>
                          </Box>
                        </Box>
                      </SwiperSlide>
                    </>
                  )
                })}
              </Swiper>
            </Box>
          </Box>

          <Box sx={{ padding: {xs: '80px 0px 0px 0px',lg:'60px 0px 0px 0px' } }}>
            {/* <Box className={style.divrectslider}>
              <Image src={leftIcon} alt="" className={style.imageslider} />
              <Image
                src={rightIcon}
                alt=""
                className={style.imagesliderright}
              />
            </Box> */}

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
                {adData.map((ad, ind) => {
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
                  )
                })}
              </Swiper>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: {lg:'61px', xs:'65px'},
                textAlign: 'center',
                alignItems: 'center',
                paddingBottom: '5px',
              }}
            >
              <Box sx={{
                textAlign: 'left'
              }}>
                <Typography
                  variant="h5"
                  className="moviesh5text"
                  sx={{
                    color: '#333333',
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: {lg:'24px',xs: '30px'},
                    lineHeight: {lg:'32px', xs: '35px'},
                  }}
                >
                  Movies
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#414A63',
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: {lg:'16px', xs: '10px'},
                    lineHeight: {lg: '40px', xs: '10px'},
                  }}
                  className="moviesh5text"
                >
                  Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora
                  aut
                </Typography>
              </Box>

              <Box>
                <Link
                  sx={{
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: {lg:'24px', xs: "25px"},
                    lineHeight: {lg:'32px', xs: '25px'},
                    textAlign: 'right',
                    textTransform: 'capitalize',
                    color: '#118EEA',
                    textDecoration: 'none',
                  }}
                  onClick={handleClickSeeAll}
                >
                  See All
                </Link>
              </Box>
            </Box>

            <Box sx={{ paddingTop: {lg:'1px'}, display: 'flex', justifyContent: 'space-between' }}>
              {secondarydata.map((data, ind) => {
              {console.log("secondarydata",secondarydata)}
                {console.log("dataget",data)}
                return (
                  <>
                    <Box>
                      <Image
                        src={data.linkImg}
                        width={360}
                        height={510}
                        alt=""
                        className={style.moviesimg}
                        // sx={{
                        //   margin: '35px',
                        //   borderRadius: '15px',
                        // }}
                      />

                      <Typography
                        variant="h5"
                        className="moviesh5text"
                        sx={{
                          color: '#333333',
                          fontFamily: 'system-ui',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          fontSize: {lg:'24px',xs: '15px'},
                          lineHeight: {lg:'32px',xs: '15px'},
                          marginLeft: {lg:'35px',xs: '15px'},
                          marginRight: {lg:'35px',xs: '15px'},
                        }}
                      >
                        {data.title}
                      </Typography>

                      <Typography
                        variant="h5"
                        className="moviesh5text"
                        sx={{
                          color: '#333333',
                          fontFamily: 'system-ui',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          // fontSize: '16px',
                          // lineHeight: '35px',
                          // marginLeft: '35px',
                          // marginRight: '35px',
                          fontSize: {lg:'16px',xs: '10px'},
                          lineHeight: {lg:'32px',xs: '15px'},
                          marginLeft: {lg:'35px',xs: '15px'},
                          marginRight: {lg:'35px',xs: '15px'},
                        }}
                      >
                        {data.Text}
                      </Typography>
                    </Box>
                  </>
                )
              })}
            </Box>
          </Box>

          <Box>
            <Footer />
          </Box>
        </MaxWidthWrapper>
      )}
    </>
  )
}

export default Homepage
