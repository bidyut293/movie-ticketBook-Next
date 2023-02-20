import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import style from '../../styles/selectedMovie.module.css';
// import { Context } from '../../public/contextApi/auth-context';
import { CardContent, Divider, Grid, Snackbar, Typography } from '@mui/material';
import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import 'swiper/css';
import 'swiper/css/navigation';

import { Box } from '@mui/system';

import Alert from '@mui/material/Alert';

import {
  addDays,
  eachDayOfInterval,
  format,
  fromUnixTime,
  getDate,
  getMonth,
  getUnixTime,
  getYear
} from 'date-fns';
import { GetServerSideProps } from 'next';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import { moviesListing } from '../../src/data/mainData';
import { getData } from '../../src/store/reducers/dataSelected/dataSelected.slice';
import { selectedTimeDataType } from '../../src/types/constants/timeData.type';
import { timeSlotType } from '../../src/types/constants/timeSlots.type';

import AuthComponent from '../../src/components/common/AuthComponent';
import Footer from '../../src/components/common/Footer';
import Header from '../../src/components/common/Header';
import DateListComponent from '../../src/components/details-page/common/date-list/DateListComponent';
import { moviesListingType } from '../../src/types/constants/movieListing.type';
import { theatreListingType } from '../../src/types/constants/theatreListing.type';
import { theatreListHandle } from '../../src/utils/theatreListHandle';

import SearchBox from '../../src/components/common/SearchBox';
import AreaDropdown from '../../src/components/details-page/common/AreaDropdown';

import TheatreData from '../../src/components/details-page/common/TheatreData';
import { timePriceType } from '../../src/types/constants/timePrice.type';
import {
  SelectedShowReduxType,
  setSelectedShow
} from '../../src/store/reducers/selected-show/SelectedShow.slice';
import { useDispatch, useSelector } from '../../src/store';
import SelectedMovieShow from '../../src/components/details-page/common/selectedMovie/SelectedMovieShow';

const dateListHandler = () => {
  return eachDayOfInterval({ start: new Date(), end: addDays(new Date(), 9) });
};

interface SelectedMoviePageProps {
  selectedMovieData: moviesListingType | undefined;
}

const SelectedMovie: NextPage<SelectedMoviePageProps> = ({ selectedMovieData }) => {
  const theatreList = theatreListHandle(selectedMovieData);

  let MovieShowData = useSelector(state => state.SelectedShowSlice);

  const router = useRouter();
  const dispatch = useDispatch();

  // const [timeData, setTimeData] = useState<selectedTimeDataType>();
  const [isShow, setIsShow] = useState(false);
  const [warn, setWarn] = useState<boolean>(false);

  // Local States
  const [selectedDate, setSelectedDate] = useState<Date>(dateListHandler()?.[0]);
  const [theatreListingData, setTheatreListingData] =
    useState<Array<theatreListingType>>(theatreList);

  // Local Handlers
  const changeSelectedDateHandle = (newDate: Date) => {
    setSelectedDate(newDate);
    setWarn(true);
  };

  const changeSelectedAreaHandle = (value: string) => {
    console.log('CHANGE');
    setTheatreListingData(theatreListHandle(selectedMovieData, value));
  };

  const selectShowHandle = (
    time: timePriceType,
    timeArray: timePriceType[],
    theatreName: string,
    theatreId: string,
    theatreScreenName: string
  ) => {
    if (selectedDate) {
      if (selectedMovieData) {
        setIsShow(true);

        dispatch(
          setSelectedShow({
            movieId: selectedMovieData?.id | 0,
            price: time.price,
            selectedSeats: [],
            showTime: new Date(
              getYear(selectedDate),
              getMonth(selectedDate),
              getDate(selectedDate),
              time.time.getHours(),
              0
            ),
            showType: theatreId,
            theatreId: theatreScreenName
          })
        );
      }
      handleClose();
    } else {
    }
  };
  console.log('MovieShowData', MovieShowData);

  const handleClickBooking = () => {
    router.push({ pathname: '/seatbook' });
  };

  const handleClose = () => {
    setWarn(false);
  };

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
                    color: '#333333'
                  }}>
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
                    color: '#414a63'
                  }}>
                  Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
                </Typography>
                <DateListComponent
                  changeSelectedDateHandle={changeSelectedDateHandle}
                  selectedDate={selectedDate}
                  warn={warn}
                />

                <Divider sx={{ marginRight: '0px', marginTop: '20px' }} />

                <AreaDropdown changeSelectedAreaHandle={changeSelectedAreaHandle} />
                <SearchBox />
                <TheatreData
                  selectedMovieData={selectedMovieData}
                  theatreListingData={theatreListingData}
                  selectedDate={selectedDate}
                  selectShowHandle={selectShowHandle}
                />
              </Box>
            </Grid>

            {isShow && (
              <SelectedMovieShow
                selectedMovieData={selectedMovieData}
                MovieShowData={MovieShowData}
              />
            )}
          </Grid>
        </Box>

        <Footer />
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.query.movieSlug;
  const selectedMovieData = moviesListing.find(movie => movie.slug === id);

  return {
    props: { selectedMovieData }
  };
};

export default SelectedMovie;
