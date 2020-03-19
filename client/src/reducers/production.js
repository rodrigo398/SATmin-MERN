import { GET_PRODUCTION_SHEET, PRODUCTION_ERROR } from '../actions/types';

const initialState = {
  productionSheet: null,
  productionSheets: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTION_SHEET:
      return {
        ...state,
        productionSheet: payload,
        loading: false
      };
    case PRODUCTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
