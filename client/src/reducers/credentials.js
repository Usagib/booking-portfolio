const LOG_CREDENTIALS = 'LOG_CREDENTIALS';
const DESTROY_CREDENTIALS = 'DESTROY_CREDENTIALS';

const initialState = {
    name: '',
    email: '',
    password: '',
    authToken: '',
    company: '',
  };

const credentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_CREDENTIALS:
      return state;
    case DESTROY_CREDENTIALS:
      return state;
    default:
      return state;
  }
};

export default credentialsReducer;
