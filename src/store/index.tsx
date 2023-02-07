import { configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

// project import
import rootReducer from './root.reducer';
import { AppDispatch } from './redux.type';


const store = configureStore({
  reducer: rootReducer
});

type ReduxSelectorState = ReturnType<typeof rootReducer>;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<ReduxSelectorState> = useAppSelector;

export { store, dispatch, useSelector, useDispatch };

















// import { configureStore, createSlice } from '@reduxjs/toolkit'


// interface sample_selectedData {
// Director?: string;
//     Genera?: string;
//     Rating1?: any;
//     TimeMM?: any;
//     category1?: string;
//     category2?: string;
//     category3?: string;
//     id?: any;
//     linkImg?: string;
//     title?: string;
// }

// const initialState = { selectedData: {
//     Director: "",
//     Genera: "",
//     Rating1: "",
//     TimeMM: '',
//     category1: '',
//     category2: '',
//     category3: '',
//     id: '',
//     linkImg: "",
//     title: '',
// }}



// // {
// //     date?: string;
// //     day?: string;
// //     id?: string;
// //     name?: string;
// //     name2?: string;
// // selectedSeat?: Array<{
// //     Available: any;
// //     Booked: any;
// //     Selected: any;
// //     id: any;
// //     name: string;
// // }>;
// //     showPrice?: any;
// //     showTime?: string;
// // total?: any; 
// //     showTimeAll?: Array<{
// //                 id: string;
// //                 name: string;
// //                 name2: string;
// //                 showPrice: any;
// //                 showTime: string;
// // }>;
// // }

// const dataSelectedSlice = createSlice({
//   name: 'selectMovie',
//   initialState: initialState,
//   reducers: {
//     getData(state, action) {
//       state.selectedData = action.payload
//     },
//   },
// })

// const initialselectedMovieTimeState = {
//   selectedMovieData: {},
//   showCounter: true,
// }

// const movieDataSelectedSlice = createSlice({
//   name: 'selectedMovieData',
//   initialState: initialselectedMovieTimeState,
//   reducers: {
//     getMovieData(state, action) {
//       state.selectedMovieData = action.payload
//     },
//   },
// })

// const store = configureStore({
//   reducer: {
//     showData: dataSelectedSlice.reducer,
//     selectedMovieData: movieDataSelectedSlice.reducer,
//   },
// })

// export const dataActions = dataSelectedSlice.actions
// export const movieDataActions = movieDataSelectedSlice.actions

// export default store
