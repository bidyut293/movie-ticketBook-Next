import React, { useContext, useEffect, useState } from 'react';
import style from '../../styles/selectedMovie.module.css';
import Image from 'next/image';
import { NextPage } from 'next';
// import { Context } from '../../public/contextApi/auth-context';
import {
  Typography,
  Grid,
  CardContent,
  Divider,
  TextField,
  MenuItem,
  Snackbar,
} from '@mui/material';
import Card from '@mui/material/Card';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import starico from '../../public/images/homepageImage/homePage/Star.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { useRouter } from 'next/router';

import { Box } from '@mui/system';

import Alert from '@mui/material/Alert';
import { timeDataType } from '../../src/types/constants/time.type';

import { useSelector } from '../../src/store/index';

import { timeSlotType } from '../../src/types/constants/timeSlots.type';
import { timeSlots } from '../../src/data/data';
import { selectedTimeDataType } from '../../src/types/constants/timeData.type';

import { useDispatch } from '../../src/store';
import { getData } from '../../src/store/reducers/dataSelected/dataSelected.slice';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import notFoundLogo from '../../public/images/homepageImage/nodatafound.png';
import {
  getUnixTime,
  format,
  addDays,
  eachDayOfInterval,
  fromUnixTime,
  addHours,
  getMonth,
  getDay,
  isPast,
  getDate,
} from 'date-fns';
import { moviesListing, theatreListing, area } from '../../src/data/mainData';
import { GetServerSideProps } from 'next';

import Header from '../../src/components/common/Header';
import Footer from '../../src/components/common/Footer';
import { theatreListingType } from '../../src/types/constants/theatreListing.type';
import NotFoundMsg from '../../src/components/common/NotFoundMsg';
import AuthComponent from '../../src/components/common/AuthComponent';

interface sample_currencies {
  value: any;
  label: any;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  // [theme.breakpoints.up('xs')]: {
  //     width: '15ch',
  //     height: '15ch',
  //     paddingLeft: '5ch',
  //   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    border: '1px solid black',
    borderRadius: '6px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    color: 'black',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
    // [theme.breakpoints.up('xs')]: {
    //   width: '35ch',
    //   paddingLeft: '5ch',
    //   height: '5ch',
    //   fontSize: '5ch'
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width: '30ch',
    // },
  },
}));

const dateFunc = () => {
  const today = new Date();
  const after9Days = addDays(today, 9);
  const _9Days = eachDayOfInterval({ start: today, end: after9Days });
  let tempArray: any[] = [];
  _9Days.forEach((day) => {
    tempArray.push({
      date: getUnixTime(day),
    });
  });
  return tempArray;
};

interface SelectedMoviePageProps {
  selectedMovieData: any;
}

const SelectedMovie: NextPage<SelectedMoviePageProps> = ({ selectedMovieData }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [timeCard, setTimeCard] = useState<Array<timeDataType>>([]);
  const [data, setData] = useState<Array<timeSlotType>>([]);

  const [date, setDate] = useState<timeSlotType>();
  const [timeData, setTimeData] = useState<selectedTimeDataType>();
  const [warn, setWarn] = useState<boolean>(false);
  const [currentHours, setCurrentHours] = useState<number | undefined>();
  const [id, setId] = useState();
  const [theatreListingData, setTheatreListingData] = useState<Array<theatreListingType>>([]);

  //Redux Setup
  const selectedShow = useSelector((state) => state.dataSelectedSlice.movie);

  // const getSelectedMovieData = useSelector((state) => state.amount);
  // const [context, setContext] = useContext(Context);
  const [selectMovie, setSelectMovie] = useState();

  let dateArray = dateFunc();
  useEffect(() => {
    // console.log('dateArray', dateArray);
    let theatrelist: any = [];
    theatreListing.map((item, ind) => {
      if (selectedMovieData.category.includes(item.id)) {
        console.log('item', item);
        theatrelist.push(item);
      }
    });
    setTheatreListingData(theatrelist);
    setCurrentHours(dateArray[0].date);
    setTimeCard(dateArray);
    setData(timeSlots);
    setDate(dateArray[0]);
  }, []);

  useEffect(() => {
    if (timeData) {
      console.log('timeData', timeData);
    }
  }, [timeData]);

  //HandleClick here
  const handleClickdate = (data: any, id: any) => {
    console.log('handleClickdate called', data, id, currentHours);
    setDate(data);
    setWarn(true);
    setCurrentHours(data.date);
    setId(id);
  };

  const handleDateClickTime = (
    time: any,
    showTime: any,
    theatreName: any,
    theatreType: any,
    movieId: string
  ) => {
    if (date) {
      console.log('handleDateClickTime', getUnixTime(time.time));
      console.log('showTime', showTime, date);
      setTimeData({
        ...date,
        movieId: movieId,
        selectedTime: getUnixTime(time.time),
        ticketPrice: time.price,
        showTimeAll: showTime,
        title: selectedMovieData.title,
        theatreName: theatreName,
        theatreType: theatreType,
      });
      handleClose();
    } else {
      console.log('no data selected');
    }
    console.log('timeData', timeData);
  };

  const handleClickBooking = () => {
    dispatch(
      getData({
        movie: timeData,
      })
    );
    router.push({ pathname: '/seatbook' });

    console.log('timeData', timeData);
  };

  const handleClose = () => {
    setWarn(false);
  };

  const handleAreaClick = (e: any, data: any) => {
    let filterData: any = [];
    console.log('getData', data);
    theatreListing.map((item, ind) => {
      console.log('items', item);
      if (item.address.includes(data)) {
        console.log('data', item);
        filterData.push(item);
      }
    });

    if (data == 'All') {
      theatreListing.map((item, ind) => {
        if (selectedMovieData.category.includes(item.id)) {
          console.log('item', item);
          filterData.push(item);
        }
      });
    }
    setTheatreListingData(filterData);
  };

  // Sorting Here-------

  // useEffect(() => {
  //   console.log("all Data=> ", allData);
  //   const filteredData = filterData(allData, searchQuery); // filter by name
  //   const sortedData = sortData(filteredData, sortType); //sorting by age
  //   setPersonData(sortedData);
  // }, [searchQuery, sortType]);

  // const toggleSort = () => {
  //   sortType === "asc" ? setSortType("desc") : setSortType("asc");
  // };

  // const filterData = (data, query) => {
  //   let filteredData = [...data];
  //   if (query) {
  //     filteredData = data.filter((p) => {
  //       return p.name.toLowerCase().startsWith(query.toLowerCase());
  //     });
  //   }
  //   console.log("filteredData=> ", filteredData);
  //   return filteredData;
  // };

  // const sortData = (data, sortType = "asc") => {
  //   let sortededData = data;
  //   if (sortType === "asc") {
  //     sortededData.sort((a, b) => {
  //       return a.age - b.age;
  //     });
  //   } else {
  //     sortededData.sort((a, b) => {
  //       return b.age - a.age;
  //     });
  //   }
  //   console.log("sortedData=> ", sortededData);
  //   return sortededData;
  // };

  return (
    <AuthComponent>
      <MaxWidthWrapper>
        {warn && (
          <Snackbar open={warn} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
              Please Select the Time to watch Movie
            </Alert>
          </Snackbar>
        )}
        <Header />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <Box sx={{ paddingTop: '70px' }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: { lg: '36px', xs: '30px' },
                    lineHeight: { lg: '42px', xs: '45px' },
                    textTransform: 'capitalize',
                    color: '#333333',
                  }}
                >
                  Select Date
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: { lg: '16px', xs: '16px' },
                    lineHeight: { lg: '60px', xs: '20px' },
                    color: '#414a63',
                  }}
                >
                  Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
                </Typography>

                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { lg: '40%', xs: '55%' },
                        zIndex: '10',
                        cursor: 'pointer',
                        right: { lg: '0px', xs: '10px' },
                      }}
                      className="swiper-button image-swiper-button-next"
                    >
                      <ChevronRightIcon sx={{ color: '#333333' }} />
                    </Box>
                    <Box
                      // id={style.swiperbtnleft}
                      sx={{
                        position: 'absolute',
                        top: { xs: '55%', lg: '40%' },
                        zIndex: '10',
                        cursor: 'pointer',
                        left: '0px',
                      }}
                      className="swiper-button image-swiper-button-prev"
                    >
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
                            slidesPerGroup: 2,
                          },
                          500: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                          },
                          650: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                          },
                          800: {
                            slidesPerView: 5,
                            slidesPerGroup: 1,
                          },
                        }}
                        // breakpoints={{
                        //   0: {
                        //     width: 100,
                        //     slidesPerView: 2,
                        //   },
                        //   400: {
                        //     width: 100,
                        //     slidesPerView: 3,
                        //   },
                        // }}
                        // style={{ margin: '20px', color: 'black', width: '41vw' }}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          nextEl: '.image-swiper-button-next',
                          prevEl: '.image-swiper-button-prev',
                          disabledClass: 'swiper-button-disabled',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {timeCard.map((item, ind) => {
                          return (
                            <>
                              <Box sx={{ width: '60%' }}>
                                <SwiperSlide
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    // width: '105px',
                                    // width: 'fit-Content',
                                  }}
                                >
                                  <Button
                                    sx={{
                                      border: '1px solid #5A637A',
                                      borderRadius: '8px',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      backgroundColor:
                                        ind == 0 ? '#1a2c50' : id == ind ? '#1a2c50' : '#fff',
                                      ':hover': {
                                        color: '#fff',
                                      },
                                    }}
                                    className={style.cardDate}
                                    onClick={() => handleClickdate(item, ind)}
                                  >
                                    <Typography
                                      variant="h5"
                                      className={style.DateText}
                                      sx={{ fontSize: 14, padding: '10px' }}
                                    >
                                      {format(fromUnixTime(item.date), 'd LLL')}
                                    </Typography>

                                    <Typography
                                      variant="h5"
                                      className={style.DateText2}
                                      sx={{
                                        fontSize: 14,
                                        paddingBottom: '6px',
                                        color: ind == 0 ? '#fff' : id == ind ? '#fff' : '#333333',
                                        '&:hover': {
                                          color: '#efefef',
                                        },
                                      }}
                                    >
                                      {format(fromUnixTime(item.date), 'E')}
                                    </Typography>
                                  </Button>
                                </SwiperSlide>
                              </Box>
                            </>
                          );
                        })}
                      </Swiper>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ marginRight: '0px', marginTop: '20px' }} />

                <Box style={{ paddingTop: '50px' }}>
                  <LocationOnOutlinedIcon
                    sx={{
                      color: 'black',
                      width: { lg: '31px', xs: '25px' },
                      height: { lg: '31px', xs: '45px' },
                    }}
                  />
                  <TextField
                    id="standard-select-currency"
                    select
                    sx={{
                      marginLeft: '5px',
                      width: { xs: '40vw', lg: '16vw' },
                      fontSize: { lg: '2rem', xs: '0.3rem' },
                    }}
                    defaultValue="All"
                    variant="standard"
                    inputProps={{
                      sx: {
                        fontSize: { lg: '18px', xs: '20px' },
                        minHeight: {
                          lg: '1.4375em !important',
                          xs: '0.4em !important',
                        },
                        padding: { lg: '4px 0 5px', xs: '10px 0 5px' },
                      },
                    }}
                  >
                    {area.map((option) => (
                      <MenuItem
                        sx={{ fontSize: { xs: '20px' } }}
                        key={option.value}
                        value={option.value}
                        onClick={(e) => handleAreaClick(e, option.value)}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box
                  sx={{
                    paddingTop: '50px',
                    display: 'flex',
                    paddingRight: { lg: '110px', xs: '0px' },
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ width: { lg: '100%', xs: '100%' } }}>
                    <Search sx={{ marginLeft: '0px' }}>
                      <SearchIconWrapper>
                        <SearchIcon
                          sx={{
                            width: { lg: '1em', xs: '1.5em' },
                            height: { lg: '1em', xs: '1.5em' },
                          }}
                        />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </Search>
                  </Box>
                </Box>

                <Box>
                  {theatreListingData.map((item, ind) => {
                    if (selectedMovieData.category.includes(item.id)) {
                      return (
                        <>
                          <Box
                            sx={{
                              paddingTop: '40px',
                              paddingRight: { lg: '110px', xs: '0px' },
                            }}
                          >
                            <Box
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={starico} className={style.starlogo} alt="starlogo" />
                                <Typography
                                  variant="h5"
                                  className="moviesh5text"
                                  sx={{
                                    color: '#333333',
                                    fontFamily: 'system-ui',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: { lg: '28px', xs: '20px' },
                                    lineHeight: '32px',
                                    paddingLeft: '12px',
                                  }}
                                >
                                  {item.name}
                                </Typography>
                              </Box>

                              <Box
                                style={{
                                  backgroundColor: '#F2C46F',
                                  borderRadius: '4px',
                                  width: 'max-content',
                                  margin: '12px',
                                  marginTop: '12px',
                                }}
                              >
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontFamily: 'system-ui',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { lg: '12px', xs: '10px' },
                                    textAlign: 'center',
                                    lineHeight: '24px',
                                    color: '#FFFFFF',
                                    padding: '0px 5px 0px 5px',
                                  }}
                                >
                                  {item.shortForm}
                                </Typography>
                              </Box>
                            </Box>

                            <Typography
                              variant="h5"
                              className="moviesh5text"
                              style={{
                                color: '#5A637A',
                                fontFamily: 'system-ui',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '24px',
                                paddingTop: '13px',
                              }}
                            >
                              {item.address}
                            </Typography>

                            <Box
                              className={style.divregular}
                              style={{ display: 'flex', flexDirection: 'column' }}
                            >
                              {item.show.map((type, i) => {
                                return (
                                  <>
                                    <Box
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                      }}
                                    >
                                      <Typography
                                        variant="h5"
                                        className="moviesh5text"
                                        sx={{
                                          color: '#5A637A',
                                          fontFamily: 'system-ui',
                                          fontStyle: 'normal',
                                          fontWeight: '500',
                                          fontSize: { lg: '24px', xs: '10px' },
                                          lineHeight: '32px',
                                          paddingTop: '23px',
                                        }}
                                      >
                                        {type.name}
                                      </Typography>

                                      <Typography
                                        variant="h5"
                                        className="moviesh5text"
                                        sx={{
                                          color: '#5A637A',
                                          fontFamily: 'system-ui',
                                          fontStyle: 'normal',
                                          fontWeight: '400',
                                          fontSize: { lg: '18px', xs: '12px' },
                                          lineHeight: '28px',
                                          paddingTop: '23px',
                                        }}
                                      >
                                        Rs.{type.time[0].price}
                                      </Typography>
                                    </Box>

                                    <Box className={style.griditemdiv}>
                                      {type.time.map((time, ind) => {
                                        return (
                                          <>
                                            <Box
                                              style={{
                                                padding: '20px',
                                                paddingLeft: '0px',
                                              }}
                                            >
                                              <Button
                                                sx={{
                                                  border:
                                                    isPast(time.time) &&
                                                    isPast(fromUnixTime(currentHours))
                                                      ? '0px'
                                                      : '1px solid #5A637A',
                                                  borderRadius: '5px',
                                                  color: '#1a2c50',
                                                  fontSize: '17px',
                                                  backgroundColor:
                                                    isPast(time.time) &&
                                                    isPast(fromUnixTime(currentHours))
                                                      ? '#DADFE8'
                                                      : '#fff',
                                                  '&:hover': {
                                                    color: '#fff',
                                                    backgroundColor: '#1a2c50',
                                                    fontSize: '18px',
                                                  },
                                                  '&:focus': {
                                                    color: '#fff',
                                                    backgroundColor: '#1a2c50',
                                                    fontSize: '18px',
                                                  },
                                                }}
                                                id="card"
                                                disabled={
                                                  isPast(time.time) &&
                                                  isPast(fromUnixTime(currentHours))
                                                    ? true
                                                    : false
                                                }
                                                onClick={() =>
                                                  handleDateClickTime(
                                                    time,
                                                    type.time,
                                                    item.name,
                                                    type.name,
                                                    item.id
                                                  )
                                                }
                                              >
                                                {time.time.getHours()}:00
                                              </Button>
                                            </Box>
                                          </>
                                        );
                                      })}
                                    </Box>
                                  </>
                                );
                              })}
                            </Box>
                          </Box>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Box sx={{ margin: '30px' }}>
                            <Typography variant="h6">No Theatre Found</Typography>
                            <Image
                              src={notFoundLogo}
                              className={style.imageNoFound}
                              alt="no found data"
                              width={400}
                              height={400}
                            />
                          </Box>
                        </>
                      );
                    }
                  })}
                </Box>
              </Box>
            </Grid>

            {timeData && (
              <Grid item xs={12} lg={5}>
                <Box
                  sx={{
                    display: 'flex',
                    paddingLeft: { lg: '80px', xs: '0px' },
                    paddingTop: { lg: '190px', xs: '100px' },
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      height: '50vh',
                      overflow: 'hidden',
                    }}
                  >
                    <Image src={selectedMovieData.linkImg} alt="data" width={400} height={550} />
                  </Box>

                  <Box>
                    <Typography variant="h4" className={style.nameMovie}>
                      {selectedMovieData.title}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        width: { lg: '70%', xs: '100%', md: '50%' },
                        justifyContent: 'space-between',
                        paddingTop: '20px',
                      }}
                    >
                      <Typography variant="h4" className={style.category2}>
                        Genre
                      </Typography>
                      <Typography variant="h4" className={style.category2}>
                        {selectedMovieData.genre}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        width: { lg: '70%', xs: '100%', md: '50%' },
                        justifyContent: 'space-between',
                        paddingTop: '20px',
                      }}
                    >
                      <Typography variant="h4" className={style.category2}>
                        Durasi
                      </Typography>
                      <Typography variant="h4" className={style.category2}>
                        {selectedMovieData.duration} - minutes
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        width: { lg: '70%', xs: '100%', md: '50%' },
                        justifyContent: 'space-between',
                        paddingTop: '20px',
                      }}
                    >
                      <Typography variant="h4" className={style.category2}>
                        Sutradara
                      </Typography>
                      <Typography variant="h4" className={style.category2}>
                        {selectedMovieData.director}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        width: { lg: '70%', xs: '100%', md: '50%' },
                        justifyContent: 'space-between',
                        paddingTop: '20px',
                      }}
                    >
                      <Typography variant="h4" className={style.category2}>
                        Rating Usia
                      </Typography>
                      <Typography variant="h4" className={style.category2}>
                        {selectedMovieData.rating1}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: { lg: '90%', xs: '100%', md: '50%' },
                      paddingTop: '50px',
                    }}
                  >
                    <Card
                      sx={{
                        border: '1px solid #5A637A',
                        borderRadius: '8px',
                      }}
                      id="card"
                      className={style.cardbooking}
                    >
                      <CardContent style={{ paddingTop: '25px', paddingLeft: '18px' }}>
                        <Typography
                          className={style.selectThatre}
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {timeData.theatreName}
                        </Typography>

                        <Typography
                          className={style.selectThatre2}
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {format(fromUnixTime(timeData.date), 'E')},
                          {format(fromUnixTime(timeData.date), 'd LLL')} -{' '}
                          {format(fromUnixTime(timeData.date), 'y')}
                        </Typography>

                        <Box
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography
                            className={style.selectThatre3}
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {timeData.theatreType}
                          </Typography>

                          <Typography
                            className={style.selectThatre3}
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {fromUnixTime(timeData.selectedTime).getHours()}:00
                          </Typography>
                        </Box>

                        <Typography
                          className={style.selectThatre4}
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          * Pemilihan kursi dapat dilakukan setelah ini
                        </Typography>

                        <Button
                          variant="contained"
                          className={style.buttonset}
                          onClick={handleClickBooking}
                        >
                          Continue...
                        </Button>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>

        <Footer />
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.movieSlug;
  const selectedMovieData = moviesListing.find((movie) => movie.slug === id);

  console.log('selectedMovieData', selectedMovieData);
  return {
    props: { selectedMovieData }, // will be passed to the page component as props
  };
};

export default SelectedMovie;
