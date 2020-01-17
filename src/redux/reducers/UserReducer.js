import { SIGN_UP, LOG_IN, LOG_ERROR, LOG_IN_TOKEN, LOG_OUT, CLEAR_ERROR } from 'redux/constants';

const initialState = {
  isAuthenticated: false,
  userInfo: '',
  error: false,
  errorMessage: null,
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case LOG_IN:
    case LOG_IN_TOKEN:
    case SIGN_UP: {
      return { ...state, isAuthenticated: true, userInfo: actions.payload };
    }
    case LOG_OUT: {
      return { ...state };
    }
    case LOG_ERROR: {
      return { ...state, error: true, errorMessage: actions.payload };
    }
    case CLEAR_ERROR: {
      return { ...state, error: false, errorMessage: null };
    }
    default: {
      return state;
    }
  }
}
