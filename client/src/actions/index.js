const LOGIN = 'LOGIN';

const login = credential => (
  { type: LOGIN, credential }
);

export {
  login,
};
