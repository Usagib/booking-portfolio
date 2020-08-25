import React from 'react';
import LoginHelper from '../helpers/LoginHelper';


const Login = () => (
  <div className="login-container">
    <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
      <h1 class="display-4">Hello.</h1>
      <form>
          <div class="form-group">
              <input class="form-control form-control-lg" placeholder="Email" type="email"/>
          </div>
          <div class="form-group">
              <input class="form-control form-control-lg" placeholder="Password" type="password"/>
          </div>
          <div class="form-group">
              <button class="btn btn-dark btn-lg btn-block">Log In</button>
                <small class="form-text text-black">Not yet registered?, click here</small>
          </div>
      </form>
    </div>
  </div>
);

export default Login;
