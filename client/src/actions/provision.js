import axios from 'axios';
import { setAlert } from './alert';

import { ADD_PROVISION, PROVISION_ERROR, GET_PROVISIONS } from './types';

//Add provision
export const addProvision = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  try {
    const res = await axios.post('/api/provision', formData, config);
    dispatch({
      type: ADD_PROVISION,
      payload: res.data
    });
    dispatch(setAlert('Disposición almacenada', 'success'));
    history.push('/files');
  } catch (err) {
    dispatch({
      type: PROVISION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get provisions
export const getProvisions = () => async dispatch => {
  try {
    const res = await axios.get(`/api/provision`);
    dispatch({
      type: GET_PROVISIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROVISION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get provisions by file
export const getProvisionsByFile = id => async dispatch => {
  try {
    const res = await axios.get(`/api/provision/${id}`);
    dispatch({
      type: GET_PROVISIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROVISION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
