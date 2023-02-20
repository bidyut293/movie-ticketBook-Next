// import { selectedDataType } from '../types/redux/dataSelected.type';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { SelectedMoviesType } from '../types/redux/selectedMovies.type';
import { SelectedShowReduxType } from './reducers/selected-show/SelectedShow.slice';

export interface RootReduxState {
  dataSelectedSlice: SelectedMoviesType;
  SelectedShowSlice: SelectedShowReduxType;
}

export type AppDispatch = ThunkDispatch<RootReduxState, unknown, Action<string>>;
