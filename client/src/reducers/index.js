import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import file from './file';
import provision from './provision';
import canon from './canon';
import roadmap from './roadmap';
import production from './production';
import requests from './requests';

export default combineReducers({
  alert,
  auth,
  file,
  provision,
  canon,
  roadmap,
  production,
  requests
});
