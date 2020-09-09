import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesList: [],
      appointmentsList: [],
      aptGet: false,
    };
    this.getServices = this.getServices.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
    this.mapAppointments = this.mapAppointments.bind(this);
    this.cancelAppointment = this.cancelAppointment.bind(this);
    this.cancelService = this.cancelService.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  getServices() {
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken,
    };
    axios.get('https://usagi-booking-api.herokuapp.com/api/services', {
      headers,
    }).then(response => {
      this.setState({
        servicesList: response.data,
      });
    });
  }

  getAppointments(event) {
    event.preventDefault();
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

    for (let i = 0; i < servicesList.length; i += 1) {
      axios.get(`https://usagi-booking-api.herokuapp.com/api/services/${servicesList[i].id}/appointments/`, {
        headers,
      }).then(response => {
        const { data } = response;
        if (data.length !== 0) {
          appointmentsList.push(data);
        }
        this.mapAppointments(appointmentsList);
      });
    }
    return true;
  }

  mapAppointments(list) {
    const flatList = list.flat();
    for (let i = 0; i < flatList.length; i += 1) {
      const date = new Date(flatList[i].time);
      flatList[i].time = date.getHours();
    }
    this.setState({
      appointmentsList: flatList,
    });
  }

  cancelAppointment(aId, sId, event) {
    event.preventDefault();
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken,
    };
    const url = `https://usagi-booking-api.herokuapp.com/api/services/${sId}/appointments/${aId}/`;
    axios.delete(url, {
      headers,
    }).then(() => {
      window.location.reload(false);
    });
  }

  cancelService(sId, event) {
    event.preventDefault();
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken,
    };
    const url = `https://usagi-booking-api.herokuapp.com/api/services/${sId}/`;
    console.log(url);
    console.log(authToken);
    axios.delete(url, {
      headers,
    }).then(() => {
      window.location.reload(false);
    });
  }

  bookAppointment(sId, event) {
    event.preventDefault();
    const { cookies } = this.props;
    cookies.set('lastService', sId, { path: '/' });
    this.renderRedirect();
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('lastService') !== 'null') {
      return <Redirect to="/datepick" />;
    }
    return true;
  }

  render() {
    const { cookies } = this.props;
    const { servicesList, appointmentsList } = this.state;

    return (
      <div className="login-container">
        {this.getServices()}
        <div className="container d-flex align-items-center flex-column justify-content-center h-100 text-black">
          <div className="row">
            <div className="col-md-8 offset-4">
              <h1 className="log-title">
                Good to see you
                {' '}
                {cookies.get('name')}
              </h1>
              <h5 className="profile-title">
                {cookies.get('email')}
              </h5>
              <div />
              <div id="accordion" className="text-center">
                <div className="card">
                  <div className="card-header" id="userServices">
                    <h5 className="mb-0">
                      <button
                        type="button"
                        className="btn configure-btn"
                        data-toggle="collapse"
                        data-target="#collapseUserServices"
                        aria-expanded="true"
                        aria-controls="collapseUserServices"
                      >
                        Your Services
                      </button>
                    </h5>
                  </div>
                  <div id="collapseUserServices" className="collapse" aria-labelledby="userServices" data-parent="#accordion">
                    <div className="row">
                      {servicesList.map(service => (
                        <div className="col-md-4 mb-5 service-card" key={service.id}>
                          <span className="profile-title">{service.name}</span>
                          <p className="profile-subtitle">
                            {service.description}
                          </p>
                          <p className="profile-text">
                            Budget: from $
                            {service.min_cost}
                            - $
                            {service.max_cost}
                          </p>
                          <button
                            type="button"
                            onClick={event => this.cancelService(service.id, event)}
                            className="btn cancel-btn"
                          >
                            Cancel
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="userAppointments">
                    <h5 className="mb-0">
                      <button
                        type="button"
                        onClick={this.getAppointments}
                        className="btn configure-btn"
                        data-toggle="collapse"
                        data-target="#collapseUserAppointments"
                        aria-expanded="true"
                        aria-controls="collapseUserAppointments"
                      >
                        Your Appointments
                      </button>
                    </h5>
                  </div>
                  <div id="collapseUserAppointments" className="collapse" aria-labelledby="userAppointments" data-parent="#accordion">
                    <div className="row">
                      {appointmentsList.map(appointment => (
                        <div className="col-md-4 mb-5 service-card" key={appointment.id}>
                          <span className="profile-title">
                            For service #
                            {appointment.service_id}
                          </span>
                          <p className="profile-subtitle">
                            {appointment.date}
                            {' '}
                            at
                            {' '}
                            {appointment.time}
                            {' '}
                            hrs
                          </p>
                          <p className="profile-text">{appointment.description}</p>
                          <button
                            type="button"
                            onClick={
                              e => this.cancelAppointment(appointment.id, appointment.service_id, e)
                            }
                            className="btn cancel-btn"
                          >
                            Cancel appointment
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(Profile);
