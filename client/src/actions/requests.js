import axios from 'axios';

import { GET_REQUESTED, GET_REQUESTED_TICKETS, CANON_ERROR } from './types';

//Get canon requested
export const getCanonRequested = () => async dispatch => {
  try {
    const res = await axios.get(`/api/canon/requested`);
    dispatch({
      type: GET_REQUESTED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get canon Tickets requested
export const getTicketsRequested = () => async dispatch => {
  try {
    const res = await axios.get(`/api/canon/ticketRequested`);
    dispatch({
      type: GET_REQUESTED_TICKETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
