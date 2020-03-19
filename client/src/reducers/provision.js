import {
  ADD_PROVISION,
  PROVISION_ERROR,
  GET_PROVISIONS
} from '../actions/types';

const initialState = {
  provision: null,
  provisions: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PROVISION:
      return {
        ...state,
        provisions: [payload, ...state.provisions],
        loading: false
      };
    case GET_PROVISIONS:
      return {
        ...state,
        provisions: payload,
        loading: false
      };
    case PROVISION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
