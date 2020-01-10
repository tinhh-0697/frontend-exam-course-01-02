import { CHANGE_THEME, LOADING_UI, STOP_LOADING } from 'redux/constants';

export const changeTheme = theme => dispatch => {
  dispatch({ type: CHANGE_THEME, payload: theme });
};

export const setLoading = () => dispatch => {
  dispatch({ type: LOADING_UI });
};

export const stopLoading = () => dispatch => {
  dispatch({ type: STOP_LOADING });
};
