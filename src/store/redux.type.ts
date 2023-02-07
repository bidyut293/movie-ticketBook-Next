// import { selectedDataType } from '../types/redux/dataSelected.type';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { SelectedMoviesType } from '../types/redux/selectedMovies.type';

export interface RootReduxState {
  dataSelectedSlice: SelectedMoviesType;
}

export type AppDispatch = ThunkDispatch<
  RootReduxState,
  unknown,
  Action<string>
>;
