import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logCredentials } from '../actions/index';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesList: [],
      appointmentsList: [],
      serviceId: '',
      aptGet: false,
    };
    this.getServices = this.getServices.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
    this.mapAppointments = this.mapAppointments.bind(this);
    this.cancelAppointment = this.cancelAppointment.bind(this);
    this.cancelService = this.cancelService.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
  }

  cancelAppointment(aId, sId, event) {
    event.preventDefault();
    const { cookies } = this.props;
    const qs = require('qs');
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken
    };
    const url = `/api/services/${sId}/appointments/${aId}/`;
    axios.delete(url, {
      headers: headers,
    }).then(response => {
      window.location.reload(false);
    }).catch((error) => {console.log(error)})
  }

  cancelService(sId, event) {
    event.preventDefault();
    const { cookies } = this.props;
    const qs = require('qs');
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken
    };
    const url = `/api/services/${sId}/`;
    axios.delete(url, {
      headers: headers,
    }).then(response => {
      window.location.reload(false);
    }).catch((error) => {console.log(error)})
  }

  bookAppointment(sId, event) {
    const { cookies } = this.props;
    cookies.set('lastService', sId, {path: '/'});
  }

  mapAppointments(list) {
    let flatList = list.flat();
    for (let i = 0; i < flatList.length; i++) {
      let date = new Date(flatList[i].time);
      console.log(date);
      flatList[i].time = date.getHours();
    }
    this.setState({
      appointmentsList: flatList,
    });
  }

  getServices() {
    const qs = require('qs');
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken,
    };
    axios.get('api/services', {
      headers: headers,
    }).then(response => {
      this.setState({
        servicesList: response.data,
      });
    })
  }

  getAppointments(event) {
    event.preventDefault();
    console.log('get services');
    const qs = require('qs');
    const { cookies } = this.props;
    const { servicesList, appointmentsList, aptGet } = this.state;
    if (aptGet) {
      return true;
    }
    this.setState({
      aptGet: true,
    });
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken,
    };

    for (let i = 0; i < servicesList.length; i++) {
      axios.get(`api/services/${servicesList[i].id}/appointments/`, {
        headers: headers,
      }).then(response => {
        const { data } = response;
        if (data.length !== 0) {
          appointmentsList.push(data);
        }
        this.mapAppointments(appointmentsList);
      }).catch((error) => console.log(error));
    }

  }

  render() {
    const { cookies } = this.props;
    const { servicesList, appointmentsList } = this.state;

    return(
      <div className="login-container">
        {this.getServices()}
        <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
          <h1 class="display-4">Good to see you {cookies.get('name')}</h1>
          <h5 class="display-5">Your email: {cookies.get('email')}</h5>
          <h5 class="display-5">Your company: {cookies.get('company')}</h5>
          <div>

          </div>
          <div id="accordion" className="text-center">
            <div class="card">
              <div class="card-header" id="userServices">
                <h5 class="mb-0">
                  <button
                    class="btn btn-dark"
                    data-toggle="collapse"
                    data-target="#collapseUserServices"
                    aria-expanded="true"
                    aria-controls="collapseUserServices">
                    Your Services
                  </button>
                </h5>
              </div>
              <div id="collapseUserServices" class="collapse" aria-labelledby="userServices" data-parent="#accordion">
                <div className="row">
                  {servicesList.map(service => (
                    <div className="col-md-3 mb-5" key={service.id}>
                      <p>{service.id}</p>
                      <p>{service.name}</p>
                      <p>{service.description}</p>
                      <p>{service.max_cost}</p>
                      <p>{service.min_cost}</p>
                      <button
                        onClick={event => this.bookAppointment(service.id, event)}
                        className="btn btn-dark"><a href="/datepick">Book an appointment</a></button>
                        <button
                          onClick={event => this.cancelService(service.id, event)}
                          className="btn btn-danger">Cancel</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="userAppointments">
                <h5 class="mb-0">
                  <button
                    onClick={this.getAppointments}
                    class="btn btn-dark" data-toggle="collapse" data-target="#collapseUserAppointments" aria-expanded="true" aria-controls="collapseUserAppointments">
                    Your Appointments
                  </button>
                </h5>
              </div>
              <div id="collapseUserAppointments" class="collapse" aria-labelledby="userAppointments" data-parent="#accordion">
                <div className="row">
                  {appointmentsList.map(appointment => (
                    <div className="col-md-3 mb-5" key={appointment.id}>
                      <p>For service # {appointment.service_id}</p>
                      <p>{appointment.date} at {appointment.time} hrs</p>
                      <p>{appointment.description}</p>
                      <button
                        onClick={event => this.cancelAppointment(appointment.id, appointment.service_id, event)}
                        className="btn btn-danger">Cancel appointment</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  credentials: state.authentication,
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(Profile);
