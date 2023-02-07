import { combineReducers } from 'redux';
import dataSelectedSlice from './reducers/dataSelected/dataSelected.slice';
import { RootReduxState } from './redux.type';
const rootReducer = combineReducers<RootReduxState>({
  dataSelectedSlice,
});
export default rootReducer;

// import { RootReduxState } from 'store/redux.type';
// import UserSlice from './reducers/user/user.slice';
// import MenuSlice from './reducers/menu/menu.slice';
// import SnackbarSlice from 'store/reducers/snackbar/snackbar.slice';
// import ChatSlice from 'store/reducers/Chat/chat.slice';

// const rootReducer = combineReducers<RootReduxState>({
//   UserSlice,
//   MenuSlice,
//   SnackbarSlice,
//   ChatSlice,
// });
// export default rootReducer;
