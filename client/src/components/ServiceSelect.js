import React from 'react';
import axios from 'axios';
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
      imageUrl: '',
      background: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createService = this.createService.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log(this.state);
    switch(event.target.id) {
      case 'serviceName':
        this.setState({
          name: event.target.value,
        });
        console.log(event.target.value);
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
    const qs = require('qs');
    const { name, description, maxCost, minCost } = this.state;
    const { cookies } = this.props;
    const authToken = cookies.get('authToken');
    console.log(authToken);
    const headers = {
      Authorization: authToken,
    };
    event.preventDefault();

    axios.post('api/services/', qs.stringify(
      {
        name: name,
        description: description,
        max_cost: maxCost,
        min_cost: minCost,
      }
    ),
      {
        headers: headers
      }).then(response => {
      cookies.set('lastService', response.data.id, {path: '/'});
      window.location.reload(false);
     }).catch(error => {console.log(error)});
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('authToken') === 'null') {
      return <Redirect to='/login' />
    } else if (cookies.get('lastService') !== 'null') {
      return <Redirect to='/datepick' />
    }
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
      <div className="login-container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}>
        {this.renderRedirect()}
          <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
            <div>
            </div>
            <h1 class="display-4">Select a service</h1>
            <form className="bg-white mx-5 my-5 px-5 py-5 rounded">
                <div class="form-group">
                  <select
                    className="form-control"
                    id="serviceName"
                    onChange={this.handleChange}
                  >
                    {servicesList.map(service => (
                      <option
                        key={service}
                        value={`${service}`}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group row">
                  <input
                    id="Min"
                    className="col-md-6 form-control"
                    placeholder="Min budget"
                    type="number"
                    onChange={this.handleChange}/>
                  <input
                    id="Max"
                    class="col-md-6 form-control"
                    placeholder="Max budget"
                    type="number"
                    onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <input
                      id="Notes"
                      class="form-control form-control-lg"
                      placeholder="Notes"
                      type="text"
                      onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <button
                      class="btn btn-dark btn-lg btn-block"
                      type="submit"
                      onClick={this.createService}
                    >
                      Select service
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

export default connect(mapStateToProps, null)(ServiceSelect);
