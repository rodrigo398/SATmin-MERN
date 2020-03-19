import {
  GET_CANON,
  GET_CANON_REQUESTS,
  GET_CANON_REQUEST,
  CANON_ERROR,
  CLEAR_CANON_REQUEST,
  DELETE_CANON_REQUEST
} from '../actions/types';

const initialState = {
  canon: null,
  canons: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CANON:
    case GET_CANON_REQUEST:
      return {
        ...state,
        canon: payload,
        loading: false
      };
    case DELETE_CANON_REQUEST:
      return {
        ...state,
        canons: state.canons.filter(canon => canon._id !== payload),
        loading: false
      };
    case GET_CANON_REQUESTS:
      return {
        ...state,
        canons: payload,
        loading: false
      };
    case CANON_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_CANON_REQUEST:
      return {
        ...state,
        canon: null,
        canons: null,
        loading: null
      };
    default:
      return state;
  }
}
