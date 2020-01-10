import { GET_DATA, LOADING_DATA, DELETE_DATA } from 'redux/constants';

const initialState = {
  data: [],
  isLoading: false,
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case LOADING_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_DATA: {
      return {
        ...state,
        data: actions.payload,
        isLoading: false,
      };
    }
    case DELETE_DATA: {
      return { ...state, data: state.data.filter(item => item.id !== actions.payload) };
    }
    default: {
      return state;
    }
  }
}
