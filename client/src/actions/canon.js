import axios from 'axios';
import { setAlert } from './alert';
import { getCanonRequested } from './requests';

import {
  GET_CANON,
  GET_CANON_REQUESTS,
  GET_CANON_REQUEST,
  CANON_ERROR,
  DELETE_CANON_REQUEST
} from './types';

//Request Canon
export const requestCanon = (id, formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(`/api/canon/${id}`, formData, config);
    dispatch({
      type: GET_CANON,
      payload: res.data
    });
    dispatch(
      setAlert(`Se ha solicitado la liquidación de Canon Minero`, 'success')
    );
    history.push(`/canon-requests/${id}`);
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get canon requests
export const getCanonRequests = id => async dispatch => {
  try {
    const res = await axios.get(`/api/canon/requests/${id}`);
    dispatch({
      type: GET_CANON_REQUESTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//Get canon
export const getCanon = id => async dispatch => {
  try {
    const res = await axios.get(`/api/canon/${id}`);
    dispatch({
      type: GET_CANON,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete canon request (Doesn't delete the canon id on Files.canon Collection)
export const deleteCanonRequest = (id, history, fid) => async dispatch => {
  try {
    const res = await axios.delete(`/api/canon/${id}`);
    dispatch({
      type: DELETE_CANON_REQUEST,
      payload: id
    });
    dispatch(setAlert(`Se ha eliminado la solicitud`, 'success'));
    history.push(`/canon-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Approve canon request
export const approveCanonRequest = (
  id,
  history,
  fid,
  formData
) => async dispatch => {
  try {
    const res = await axios.put(`/api/canon/approve/${id}`, formData);
    dispatch({
      type: GET_CANON,
      payload: res.data
    });
    dispatch(setAlert(`Solicitud de liquidación de canon aprobada`, 'success'));
    history.push(`/canon-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Disapprove canon request
export const disapproveCanonRequest = (
  id,
  history,
  fid,
  formData
) => async dispatch => {
  try {
    const res = await axios.put(`/api/canon/disapprove/${id}`, formData);
    dispatch({
      type: GET_CANON,
      payload: res.data
    });
    dispatch(
      setAlert(`Solicitud de liquidación de canon desaprobada`, 'success')
    );
    history.push(`/canon-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get canon requested
export const getRequested = id => async dispatch => {
  try {
    const res = await axios.get(`/api/canon/requested/${id}`);
    dispatch({
      type: GET_CANON_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get canon requested
export const getCanonUserRequest = () => async dispatch => {
  try {
    const res = await axios.get('/api/canon/requested');
    dispatch({
      type: GET_CANON_REQUESTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Insert ticket canon
export const paymentReport = (id, formData, history, fid) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(
      `/api/canon/ticket/${id}`,
      formData,
      history,
      config
    );
    dispatch({
      type: GET_CANON_REQUEST,
      payload: res.data
    });
    dispatch(setAlert(`Se ha solicitado el informe de pago`, 'success'));
    history.push(`/canon-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Disapprove canon ticket
export const disapproveCanonTicket = (id, fid, history) => async dispatch => {
  try {
    const res = await axios.put(`/api/canon/ticket-disapprove/${id}`);
    dispatch({
      type: GET_CANON_REQUESTS,
      payload: res.data
    });
    dispatch(setAlert(`Informe de pago desaprobado`, 'success'));
    history.push(`/canon-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Approve canon ticket
export const approveCanonTicket = (id, fid, history) => async dispatch => {
  try {
    const res = await axios.put(`/api/canon/ticket-approve/${id}`);
    dispatch({
      type: GET_CANON_REQUESTS,
      payload: res.data
    });
    dispatch(setAlert(`Informe de pago aprobado`, 'success'));
    history.push(`/canon-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: CANON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
