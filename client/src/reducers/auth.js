const LOGIN = 'LOGIN';

const defaultState = {};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
     state = action.credential;
     return state;
    default:
      return state;
  }
};

export default authReducer;
