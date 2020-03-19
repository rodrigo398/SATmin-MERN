import axios from 'axios';
import { setAlert } from './alert';

import { GET_FILES, GET_FILE, FILE_ERROR } from './types';

//Get files
export const getFiles = () => async dispatch => {
  try {
    const res = await axios.get('/api/file');

    dispatch({
      type: GET_FILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get current users file
export const getCurrentFile = () => async dispatch => {
  try {
    const res = await axios.get('/api/file/me');

    dispatch({
      type: GET_FILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update a file
export const createFile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/file', formData, config);
    dispatch({
      type: GET_FILES,
      payload: res.data
    });

    dispatch(
      setAlert(
        edit ? 'El expediente ya se encuentra registrado' : 'Expediente creado',
        'success'
      )
    );

    if (!edit) {
      history.push('/files');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get file
export const getFile = id => async dispatch => {
  try {
    const res = await axios.get(`/api/file/${id}`);

    dispatch({
      type: GET_FILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
