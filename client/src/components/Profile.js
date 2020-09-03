import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  }

  getServices() {
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken,
    };
    axios.get('api/services', {
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
      axios.get(`api/services/${servicesList[i].id}/appointments/`, {
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
    const url = `/api/services/${sId}/appointments/${aId}/`;
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
    const url = `/api/services/${sId}/`;
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
  }

  render() {
    const { cookies } = this.props;
    const { servicesList, appointmentsList } = this.state;

    return (
      <div className="login-container">
        {this.getServices()}
        <div className="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
          <h1 className="display-4">
            Good to see you
            {cookies.get('name')}
          </h1>
          <h5 className="display-5">
            Your email:
            {cookies.get('email')}
          </h5>
          <h5 className="display-5">
            Your company:
            {cookies.get('company')}
          </h5>
          <div />
          <div id="accordion" className="text-center">
            <div className="card">
              <div className="card-header" id="userServices">
                <h5 className="mb-0">
                  <button
                    type="button"
                    className="btn btn-dark"
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
                    <div className="col-md-3 mb-5" key={service.id}>
                      <p>{service.id}</p>
                      <p>{service.name}</p>
                      <p>{service.description}</p>
                      <p>{service.max_cost}</p>
                      <p>{service.min_cost}</p>
                      <a href="/datepick">
                        <button
                          type="button"
                          onClick={event => this.bookAppointment(service.id, event)}
                          className="btn btn-dark"
                          >
                          Book an appointment
                        </button>
                      </a>
                      <button
                        type="button"
                        onClick={event => this.cancelService(service.id, event)}
                        className="btn btn-danger"
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
                    className="btn btn-dark"
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
                    <div className="col-md-3 mb-5" key={appointment.id}>
                      <p>
                        For service #
                        {appointment.service_id}
                      </p>
                      <p>
                        {appointment.date}
                        {' '}
                        at
                        {' '}
                        {appointment.time}
                        {' '}
                        hrs
                      </p>
                      <p>{appointment.description}</p>
                      <button
                        type="button"
                        onClick={
                          e => this.cancelAppointment(appointment.id, appointment.service_id, e)
                        }
                        className="btn btn-danger"
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
