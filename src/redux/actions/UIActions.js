import { CHANGE_THEME, GET_DATA } from 'redux/constants';

export const changeTheme = () => dispatch => {
  dispatch({ type: CHANGE_THEME });
};

export const getData = data => dispatch => {
  dispatch({ type: GET_DATA, payload: data });
};
