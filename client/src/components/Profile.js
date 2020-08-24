import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = props => {

  useEffect(() => {
    axios.get('/api/user.json')
      .then(res => setUser(res.data))
  }, []);

  const [user, setUser] = useState([]);

  return(
    <div className="login-container">
      <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
        <h1 class="display-4">Good to see you User.</h1>
        <h1 class="display-5">Your email: email@email.com</h1>
        <div>
          {
            {}
          }
        </div>
        <div id="accordion" className="text-center">
          <div class="card">
            <div class="card-header" id="userServices">
              <h5 class="mb-0">
                <button class="btn btn-dark" data-toggle="collapse" data-target="#collapseUserServices" aria-expanded="true" aria-controls="collapseUserServices">
                  Your Services
                </button>
              </h5>
            </div>
            <div id="collapseUserServices" class="collapse" aria-labelledby="userServices" data-parent="#accordion">
                <h1 class="display-5">Service 1</h1>
                <button class="btn btn-dark">Book an appointment</button>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="userAppointments">
              <h5 class="mb-0">
                <button class="btn btn-dark" data-toggle="collapse" data-target="#collapseUserAppointments" aria-expanded="true" aria-controls="collapseUserAppointments">
                  Upcoming Appointments
                </button>
              </h5>
            </div>
            <div id="collapseUserAppointments" class="collapse" aria-labelledby="userAppointments" data-parent="#accordion">
                <h1 class="display-5">Appontment 1</h1>
                <button class="btn btn-dark">Cancel</button>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="userHistory">
              <h5 class="mb-0">
                <button class="btn btn-dark" data-toggle="collapse" data-target="#collapseUserHistory" aria-expanded="true" aria-controls="collapseUserHistory">
                  Past Appointments
                </button>
              </h5>
            </div>
            <div id="collapseUserHistory" class="collapse" aria-labelledby="userHistory" data-parent="#accordion">
              <h1 class="display-5">Past Appontment 1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
