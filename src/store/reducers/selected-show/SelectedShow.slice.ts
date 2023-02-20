import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectedShowReduxType {
  movieId: number;
  theatreId: string;
  showTime: Date | null;
  price: number;
  showType: string;
  selectedSeats: Array<number>;
}

const initialState: SelectedShowReduxType = {
  movieId: 0,
  theatreId: '',
  showTime: null,
  price: 0,
  showType: '',
  selectedSeats: []
};

const SelectedShow = createSlice({
  name: 'SelectedShow',
  initialState,
  reducers: {
    setSelectedShow: (
      state: SelectedShowReduxType,
      { payload }: PayloadAction<SelectedShowReduxType>
    ) => {
      console.log('redux data', payload);
      state.movieId = payload.movieId;
      state.price = payload.price;
      state.selectedSeats = [...payload.selectedSeats];
      state.showTime = payload.showTime;
      state.showType = payload.showType;
      state.theatreId = payload.theatreId;
    }
  }
});

export default SelectedShow.reducer;
export const { setSelectedShow } = SelectedShow.actions;
