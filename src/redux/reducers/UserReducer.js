import { SIGN_UP, LOG_IN, LOG_ERROR, LOG_IN_TOKEN, LOG_OUT } from 'redux/constants';

const initialState = {
  isAuthenticated: false,
  userInfo: '',
  error: false,
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
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
}
