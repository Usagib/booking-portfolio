const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';
const ADD_SERVICE = 'ADD_SERVICE';
const REMOVE_SERVICE = 'REMOVE_SERVICE';
const LOG_CREDENTIALS = 'LOG_CREDENTIALS';
const DESTROY_CREDENTIALS = 'DESTROY_CREDENTIALS';

const addAppointment = appointment => (
  { type: ADD_APPOINTMENT, appointment }
);

const removeAppointment = appointment => (
  { type: REMOVE_APPOINTMENT, appointment }
);

const addService = service => (
  { type: ADD_SERVICE, service }
);

const removeService = service => (
  { type: REMOVE_SERVICE, service }
);

const logCredentials = credential => (
  { type: LOG_CREDENTIALS, credential }
);

const destroyCredentials = credential => (
  { type: DESTROY_CREDENTIALS, credential }
);


export {
  addAppointment,
  removeAppointment,
  addService,
  removeService,
  logCredentials,
  destroyCredentials,
};
