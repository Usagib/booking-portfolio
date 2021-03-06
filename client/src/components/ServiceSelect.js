import React from 'react';
import axios from 'axios';
import qs from 'qs';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ServiceSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '3d PrintingService',
      description: '',
      maxCost: '',
      minCost: '',
      background: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createService = this.createService.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    switch (event.target.id) {
      case 'serviceName':
        this.setState({
          name: event.target.value,
        });
        switch (event.target.value) {
          case '3d Printing':
            this.setState({
              background: '/3dprint.png',
            });
            break;
          case 'Web Development':
            this.setState({
              background: '/railsmain.png',
            });
            break;
          case 'Web Design':
            this.setState({
              background: '/reactmain.png',
            });
            break;
          case 'Graphic Design':
            this.setState({
              background: '/designmain.png',
            });
            break;
          case 'Project Management':
            this.setState({
              background: '/project.png',
            });
            break;
          case 'Stationery Production':
            this.setState({
              background: '/stationery.png',
            });
            break;
          case 'Tech Support':
            this.setState({
              background: '/support.png',
            });
            break;
          default:
            break;
        }
        break;
      case 'Notes':
        this.setState({
          description: event.target.value,
        });
        break;
      case 'Max':
        this.setState({
          maxCost: event.target.value,
        });
        break;
      case 'Min':
        this.setState({
          minCost: event.target.value,
        });
        break;
      default:
        return this.state;
    }
    return false;
  }

  createService(event) {
    const {
      name, description, maxCost, minCost,
    } = this.state;
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    const headers = {
      Authorization: authToken,
    };
    event.preventDefault();

    axios.post('https://usagi-booking-api.herokuapp.com/api/services/', qs.stringify(
      {
        name,
        description,
        max_cost: maxCost,
        min_cost: minCost,
      },
    ),
    {
      headers,
    }).then(response => {
      cookies.set('lastService', response.data.id, { path: '/' });
      window.location.reload(false);
    });
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('authToken') === 'null' || cookies.get('authToken') === undefined) {
      return <Redirect to="/login" />;
    } if (cookies.get('lastService') !== 'null') {
      return <Redirect to="/datepick" />;
    }
    return true;
  }

  render() {
    const servicesList = [
      '3d Printing',
      'Web Development',
      'Web Design',
      'Graphic Design',
      'Project Management',
      'Stationery Production',
      'Tech Support',
    ];
    const { background } = this.state;
    return (
      <div
        className="login-container container-fluid"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      >
        {this.renderRedirect()}
        <div className="row h-100">
          <div className="col-md-4 offset-8">
            <div className="form-container d-flex align-items-right flex-column justify-content-center text-black">
              <div />
              <h1 className="catalog-title fadein fadein-first mb-5">Configure a Service</h1>
              <form className="rounded">
                <div className="form-group fadein fadein-second">
                  <h1 className="catalog-subtitle">
                    Service:
                  </h1>
                  <select
                    className="form-control"
                    id="serviceName"
                    onChange={this.handleChange}
                  >
                    {servicesList.map(service => (
                      <option
                        key={service}
                        value={`${service}`}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group fadein fadein-third">
                  <h1 className="catalog-subtitle">
                    Your minimum budget
                  </h1>
                  <input
                    id="Min"
                    className="col-md-6 form-control"
                    placeholder="Min budget"
                    type="number"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group fadein fadein-third">
                  <h1 className="catalog-subtitle">
                    Your maximum budget
                  </h1>
                  <input
                    id="Max"
                    className="col-md-6 form-control"
                    placeholder="Max budget"
                    type="number"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group fadein fadein-third">
                  <input
                    id="Notes"
                    className="form-control form-control-lg"
                    placeholder="Notes"
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group fadein fadein-fourth mt-5">
                  <button
                    className="btn configure-btn"
                    type="submit"
                    onClick={this.createService}
                  >
                    Select service & Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ServiceSelect.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(ServiceSelect);
