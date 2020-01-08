import { GET_DATA } from 'redux/constants';

const initialState = {
  data: [],
};
export default function(state = initialState, actions) {
  switch (actions.type) {
    case GET_DATA: {
      return {
        ...state,
        data: actions.payload,
      };
    }
    default: {
      return state;
    }
  }
}
