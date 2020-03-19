import { GET_REQUESTED_TICKETS, GET_REQUESTED } from '../actions/types';

const initialState = {
  canonsRequested: [],
  ticketsRequested: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REQUESTED_TICKETS:
      return {
        ...state,
        ticketsRequested: payload,
        loading: false
      };
    case GET_REQUESTED:
      return {
        ...state,
        canonsRequested: payload,
        loading: false
      };
    default:
      return state;
  }
}
