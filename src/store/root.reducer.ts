import { combineReducers } from 'redux';
import dataSelectedSlice from './reducers/dataSelected/dataSelected.slice';
import SelectedShowSlice from './reducers/selected-show/SelectedShow.slice';
import { RootReduxState } from './redux.type';

const rootReducer = combineReducers<RootReduxState>({
  dataSelectedSlice,
  SelectedShowSlice
});
export default rootReducer;
