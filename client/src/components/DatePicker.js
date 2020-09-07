import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import qs from 'qs';
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
    switch (event.target.id) {
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
    const {
      date, time, description, serviceId,
    } = this.state;
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const url = `https://usagi-booking-api.herokuapp.com/api/services/${serviceId}/appointments/`;
    const headers = {
      Authorization: authToken,
    };
    event.preventDefault();

    axios.post(url, qs.stringify(
      {
        date,
        time,
        description,
      },
    ),
    {
      headers,
    }).then(() => {
      cookies.set('lastService', null, { path: '/' });
      window.location.reload(false);
    });
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('authToken') === 'null') {
      return <Redirect to="/login" />;
    }
    if (cookies.get('lastService') === 'null') {
      return <Redirect to="/profile" />;
    }
    return true;
  }

  render() {
    return (
      <header>
        {this.renderRedirect()}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                background: 'url(\'datemain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block fadein fadein-first">
                <span>
                  <h1 className="carousel-title text-white">Book an Appointment</h1>
                  <p className="carousel-subtitle">Select a date and time for your appointment</p>
                </span>
                <form className="row">
                  <div className="form-group col-md-3 fadein">
                    <input
                      id="Date"
                      className="form-control"
                      placeholder="Appointment Date"
                      type="date"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-3 fadein">
                    <input
                      id="Time"
                      className="form-control"
                      placeholder="Time"
                      type="time"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-3 fadein">
                    <input
                      id="AptDescription"
                      className="form-control"
                      placeholder="Add a description"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-3 fadein">
                    <button
                      className="btn configure-btn"
                      type="submit"
                      onClick={this.createAppointment}
                    >
                      Book an appointment
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

DatePicker.propTypes = {
  cookies: PropTypes.shape({
    get: PropTypes.func.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(DatePicker);
