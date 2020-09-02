import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      description: '',
      time: '',
      serviceId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createAppointment = this.createAppointment.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleChange(event) {
    const { cookies } = this.props;
    event.preventDefault();
    console.log(this.state);
    switch(event.target.id) {
      case 'Date':
        this.setState({
          date: event.target.value,
          serviceId: cookies.get('lastService'),
        });
        break;
      case 'Time':
        this.setState({
          time: event.target.value,
        });
        break;
      case 'AptDescription':
        this.setState({
          description: event.target.value,
        });
        break;
      default:
        return this.state;
    }
    return false;
  }

  createAppointment(event) {
    const qs = require('qs');
    const { date, time, description, serviceId } = this.state;
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const url = `api/services/${serviceId}/appointments/`;
    const headers = {
      Authorization: authToken,
    };
    event.preventDefault();

    axios.post(url, qs.stringify(
      {
        date: date,
        time: time,
        description: description,
      }
    ),
      {
        headers: headers
      }).then(response => {
      cookies.set('lastService', null, { path:'/' });
      window.location.reload(false);
     }).catch(error => {console.log(error)});
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('authToken') === 'null') {
      return <Redirect to='/login' />
    }
    if (cookies.get('lastService') === 'null') {
      return <Redirect to='/profile' />
    }
  }

  render() {

    return (
      <div className="login-container">
        {this.renderRedirect()}
          <div className="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
            <h1 className="display-4">Let's meet.</h1>
            <form>
                <div className="form-group">
                    <input
                      id="Date"
                      className="form-control form-control-lg"
                      placeholder="Appointment Date"
                      type="date"
                      onChange={this.handleChange}
                    />
                </div>
                <div class="form-group">
                    <input
                      id="Time"
                      className="form-control form-control-lg"
                      placeholder="Time"
                      type="time"
                      onChange={this.handleChange}
                    />
                </div>
                <div class="form-group">
                    <input
                      id="AptDescription"
                      class="form-control form-control-lg"
                      placeholder="Add a description"
                      type="text"
                      onChange={this.handleChange}
                    />
                </div>
                <div class="form-group">
                    <button
                      class="btn btn-dark btn-lg btn-block"
                      type="submit"
                      onClick={this.createAppointment}>
                      Book an appointment
                    </button>
                </div>
            </form>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(DatePicker);
