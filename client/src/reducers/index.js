import { combineReducers } from 'redux';
import serviceReducer from './services';
import appointmentReducer from './appointments';
import credentialsReducer from './credentials';

export default combineReducers({
  services: serviceReducer,
  appointments: appointmentReducer,
  credentials: credentialsReducer,
});
