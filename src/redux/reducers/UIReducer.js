import { CHANGE_THEME } from 'redux/constants/index';

const initialState = {
  isLightTheme: true,
};
export default function(state = initialState, actions) {
  switch (actions.type) {
    case CHANGE_THEME: {
      return { ...state, isLightTheme: !state.isLightTheme };
    }
    default: {
      return state;
    }
  }
}
