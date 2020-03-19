import axios from 'axios';
import { setAlert } from './alert';

import { GET_PRODUCTION_SHEET, PRODUCTION_ERROR } from './types';

//Request Canon
export const productionSheetRequest = (
  id,
  formData,
  history
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(
      `/api/productionsheet/${id}`,
      formData,
      history,
      config
    );
    dispatch({
      type: GET_PRODUCTION_SHEET,
      payload: res.data
    });
    dispatch(
      setAlert(
        `Se ha solicitado la aprobación de la planilla de produccón`,
        'success'
      )
    );
    //history.push(`/canon-requests/${id}`);
  } catch (err) {
    dispatch({
      type: PRODUCTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
