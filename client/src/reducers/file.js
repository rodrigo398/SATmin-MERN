import {
  GET_FILES,
  GET_FILE,
  FILE_ERROR,
  CLEAR_PROFILE
} from '../actions/types';

const initialState = {
  file: null,
  files: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FILE:
      return {
        ...state,
        file: payload,
        loading: false
      };
    case GET_FILES:
      return {
        ...state,
        files: payload,
        loading: false
      };
    case FILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        file: null,
        //En el video aca pone los repos[] checkear eso
        loading: null
      };
    default:
      return state;
  }
}
