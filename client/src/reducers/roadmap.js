import {
  GET_ROADMAP,
  GET_ROADMAP_FILE,
  GET_ROADMAP_REQUEST,
  GET_ROADMAP_REQUESTS,
  DELETE_ROADMAP_REQUEST,
  ROADMAP_ERROR
} from '../actions/types';

const initialState = {
  roadmap: null,
  roadmaps: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ROADMAP_REQUEST:
    case GET_ROADMAP:
    case GET_ROADMAP_FILE:
      return {
        ...state,
        roadmap: payload,
        loading: false
      };
    case GET_ROADMAP_REQUESTS:
      return {
        ...state,
        roadmaps: payload,
        loading: false
      };
    case ROADMAP_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case DELETE_ROADMAP_REQUEST:
      return {
        ...state,
        roadmaps: state.roadmaps.filter(roadmap => roadmap._id !== payload),
        loading: false
      };
    default:
      return state;
  }
}
