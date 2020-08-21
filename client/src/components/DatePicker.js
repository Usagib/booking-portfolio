import React from 'react'

const DatePicker = () => (
  <div className="login-container">
    <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
      <h1 class="display-4">Let's meet.</h1>
      <form>
          <div class="form-group">
              <input class="form-control form-control-lg" placeholder="Appointment Date" type="date"/>
          </div>
          <div class="form-group">
              <input class="form-control form-control-lg" placeholder="Time" type="time"/>
          </div>
          <div class="form-group">
              <input class="form-control form-control-lg" placeholder="Add a description" type="text"/>
          </div>
          <div class="form-group">
              <button class="btn btn-dark btn-lg btn-block">Book an appointment</button>
          </div>
      </form>
    </div>
  </div>
);

export default DatePicker;
