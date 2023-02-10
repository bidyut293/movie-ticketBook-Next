import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedMoviesType } from '../../../types/redux/selectedMovies.type';

const initialState: SelectedMoviesType = {
  movie: {
    date: 0,
    selectedTime: 0,
    movieId: '',
    showTimeAll: [],
    theatreName: '',
    theatreType: '',
    ticketPrice: 0,
    title: '',
  },
};

const SelectedMovie = createSlice({
  name: 'SelectedMovie',
  initialState,
  reducers: {
    getData(state, { payload }: PayloadAction<SelectedMoviesType>) {
      console.log('payload', payload);
      state.movie = payload.movie;
    },
  },
});

export default SelectedMovie.reducer;

export const { getData } = SelectedMovie.actions;

// const dataSelectedSlice = createSlice({
//   name: 'selectMovie',
//   initialState: initialState,
//   reducers: {
//     getData(state, action) {
//       state.selectedData = action.payload;
//     },
//   },
// });

// export default dataSelectedSlice.reducer;

// export const { getData } = dataSelectedSlice.actions;
