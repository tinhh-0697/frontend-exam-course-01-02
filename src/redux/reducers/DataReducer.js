import {
  GET_DATA,
  LOADING_DATA,
  GET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM,
  DELETE_DATA,
  UPDATE_DATA,
  ADD_DATA,
} from 'redux/constants';

const initialState = {
  data: [],
  currentItem: {},
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
    case GET_CURRENT_ITEM: {
      return {
        ...state,
        currentItem: state.data.find(item => item.id === actions.payload),
      };
    }
    case CLEAR_CURRENT_ITEM: {
      return {
        ...state,
        currentItem: { status: true },
      };
    }
    case DELETE_DATA: {
      return { ...state, data: state.data.filter(item => item.id !== actions.payload) };
    }
    case UPDATE_DATA: {
      return {
        ...state,
        data: state.data.map(ele => {
          return ele.id === actions.payload.id ? { ...ele, ...actions.payload } : ele;
        }),
      };
    }
    case ADD_DATA: {
      return {
        ...state,
        data: [actions.payload, ...state.data],
      };
    }
    default: {
      return state;
    }
  }
}
