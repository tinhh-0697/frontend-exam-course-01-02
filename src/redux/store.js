import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import UIReducer from 'redux/reducers/UIReducer';
import DataReducer from 'redux/reducers/DataReducer';
import UserReducer from 'redux/reducers/UserReducer';

const initialState = {};

const middleWare = [thunk];

const reducers = combineReducers({
  ui: UIReducer,
  data: DataReducer,
  user: UserReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    // eslint-disable-next-line no-underscore-dangle
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
