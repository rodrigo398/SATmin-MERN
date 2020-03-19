import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_ROADMAP,
  GET_ROADMAP_FILE,
  GET_ROADMAP_REQUESTS,
  DELETE_ROADMAP_REQUEST,
  ROADMAP_ERROR
} from './types';

// Create roadmap request
export const createRoadmap = (id, formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(`/api/roadmap/${id}`, formData, config);
    dispatch({
      type: GET_ROADMAP,
      payload: res.data
    });
    dispatch(setAlert('Solicitud de hoja de ruta generada', 'success'));
    history.push(`/roadmap-requests/${id}`);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get roadmap requests
export const getRoadmapRequests = id => async dispatch => {
  try {
    const res = await axios.get(`/api/roadmap/requests/${id}`);
    dispatch({
      type: GET_ROADMAP_REQUESTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete roadmap request (Doesn't delete the roadmap id on Files.roadmap Collection)
export const deleteRoadmapRequest = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/roadmap/${id}`);
    dispatch({
      type: DELETE_ROADMAP_REQUEST,
      payload: id
    });
    dispatch(setAlert(`Se ha eliminado la solicitud`, 'success'));
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Approve roadmap request
export const approveRoadmapRequest = (
  id,
  history,
  fid,
  formData
) => async dispatch => {
  try {
    const res = await axios.put(`/api/roadmap/approve/${id}`, formData);
    dispatch({
      type: GET_ROADMAP,
      payload: res.data
    });
    dispatch(setAlert(`Solicitud de hojas de ruta aprobada`, 'success'));
    history.push(`/roadmap-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Generate roadmap file
export const generateRoadmapRequest = (id, history, fid) => async dispatch => {
  try {
    const res = await axios.put(`/api/roadmap/generate-a/${id}`);
    dispatch({
      type: GET_ROADMAP_FILE,
      payload: res.data
    });
    dispatch(setAlert(`Hojas de ruta generadas`, 'success'));
    history.push(`/roadmap-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Generate roadmap file
export const generateRoadmapRequestCuadruple = (
  id,
  history,
  fid
) => async dispatch => {
  try {
    const res = await axios.put(`/api/roadmap/generate-b/${id}`);
    dispatch({
      type: GET_ROADMAP_FILE,
      payload: res.data
    });
    dispatch(setAlert(`Hojas de ruta generadas`, 'success'));
    history.push(`/roadmap-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Insert ticket roadmap
export const paymentReport = (id, formData, history, fid) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(
      `/api/roadmap/ticket/${id}`,
      formData,
      history,
      config
    );
    dispatch({
      type: GET_ROADMAP_REQUESTS,
      payload: res.data
    });
    dispatch(setAlert(`Se ha solicitado el informe de pago`, 'success'));
    history.push(`/roadmap-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Disapprove roadmap ticket
export const disapproveRoadmapTicket = (id, fid, history) => async dispatch => {
  try {
    const res = await axios.put(`/api/roadmap/ticket-disapprove/${id}`);
    dispatch({
      type: GET_ROADMAP_REQUESTS,
      payload: res.data
    });
    dispatch(setAlert(`Informe de pago desaprobado`, 'success'));
    history.push(`/roadmap-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Approve roadmap ticket
export const approveRoadmapTicket = (id, fid, history) => async dispatch => {
  try {
    const res = await axios.put(`/api/roadmap/ticket-approve/${id}`);
    dispatch({
      type: GET_ROADMAP_REQUESTS,
      payload: res.data
    });
    dispatch(setAlert(`Informe de pago aprobado`, 'success'));
    history.push(`/roadmap-requests/${fid}`);
  } catch (err) {
    dispatch({
      type: ROADMAP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
