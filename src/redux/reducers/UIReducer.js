import { CHANGE_THEME, LOADING_UI, STOP_LOADING } from 'redux/constants/index';

const initialState = {
  isLightTheme: true,
  // isLoading: false,
};
export default function(state = initialState, actions) {
  switch (actions.type) {
    case CHANGE_THEME: {
      return { ...state, isLightTheme: actions.payload };
    }
    case LOADING_UI: {
      return {
        ...state,
        // isLoading: true
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        //  isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}
