import { SIGN_IN, LOG_IN, LOG_OUT, LOG_IN_TOKEN } from 'redux/constants';

const initialState = {
  isAuthenticated: false,
  userInfo: {},
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case (SIGN_IN, LOG_IN, LOG_IN_TOKEN): {
      return { ...state, isAuthenticated: true, userInfo: actions.payload };
    }
    case LOG_OUT: {
      return { initialState };
    }
    default: {
      return state;
    }
  }
}
