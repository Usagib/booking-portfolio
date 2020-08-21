import React from 'react'

const Signup = () => (
  <div className="login-container">
    <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black" id="header">
      <h1 class="display-4">Thank you.</h1>
      <form>
        <div class="form-group">
            <input class="form-control form-control-lg" placeholder="Name" type="text"/>
        </div>
        <div class="form-group">
          <input class="form-control form-control-lg" placeholder="Company" type="text"/>
        </div>
        <div class="form-group">
          <input class="form-control form-control-lg" placeholder="Email" type="enail"/>
        </div>
        <div class="form-group">
          <input class="form-control form-control-lg" placeholder="Password" type="password"/>
        </div>
        <div class="form-group">
          <input class="form-control form-control-lg" placeholder="Confirm Password" type="password"/>
        </div>
        <div class="form-group">
              <button class="btn btn-dark btn-lg btn-block">Register</button>
                <small class="form-text text-black">Already registered?, click here</small>
          </div>
      </form>
    </div>
  </div>
);

export default Signup;
