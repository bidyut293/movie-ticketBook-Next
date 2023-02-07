import { createSlice } from '@reduxjs/toolkit';
import { SelectedMoviesType } from '../../../types/redux/selectedMovies.type';

const initialState: SelectedMoviesType = {
  movie: {
    Director: '',
    Genera: '',
    Rating1: '',
    TimeMM: '',
    category1: '',
    category2: '',
    category3: '',
    id: '',
    linkImg: '',
    title: '',
  },
};

const SelectedMovie = createSlice({
  name: 'SelectedMovie',
  initialState,
  reducers: {
    getData(state, action) {
      state.movie = action.payload;
    },
  },
});

export default SelectedMovie.reducer;

export const { getData } = SelectedMovie.actions;
