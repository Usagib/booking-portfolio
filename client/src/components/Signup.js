import React from 'react';
import axios from 'axios';
import qs from 'qs';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/index';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmation: '',
      name: '',
      company: '',
      id: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    switch (event.target.id) {
      case 'userName':
        this.setState({
          name: event.target.value,
        });
        break;
      case 'userEmail':
        this.setState({
          userEmail: event.target.value,
        });
        break;
      case 'userPassword':
        this.setState({
          userPassword: event.target.value,
        });
        break;
      case 'userPasswordConfirmation':
        this.setState({
          userPasswordConfirmation: event.target.value,
        });
        break;
      case 'userCompany':
        this.setState({
          company: event.target.value,
        });
        break;
      default:
        return this.state;
    }
    return false;
  }

  handleLogin(event) {
    const {
      name, userEmail, userPassword, userPasswordConfirmation, company,
    } = this.state;
    const { loginSubmit, cookies } = this.props;
    event.preventDefault();

    axios.post('https://usagi-booking-api.herokuapp.com/api/signup', qs.stringify(
      {
        name: name,
        email: userEmail,
        password: userPassword,
        password_confirmation: userPasswordConfirmation,
        company: company,
      },
    )).then(response => {
      this.setState({
        userPassword: '',
        userPasswordConfirmation: '',
        authToken: response.data.auth_token,
        name: response.data.user.name,
        company: response.data.user.company,
        id: response.data.user.id,
        email: response.data.user.email,
      });
      loginSubmit(this.state);
    }).then(() => {
      const {
        authToken, id, email, name, company,
      } = this.state;
      cookies.set('id', id, { path: '/' });
      cookies.set('authToken', authToken, { path: '/' });
      cookies.set('email', email, { path: '/' });
      cookies.set('name', name, { path: '/' });
      cookies.set('company', company, { path: '/' });
    }).then(() => {
      window.location.reload(false);
    });
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('authToken') !== 'null' && cookies.get('authToken') !== undefined) {
      return <Redirect to="/profile" />;
    }
    return true;
  }

  render() {
    const {
      userName,
      userEmail,
      userPassword,
      userPasswordConfirmation,
      userCompany,
    } = this.state;
    return (
      <div className="login-container">
        {this.renderRedirect()}
        <div className="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black" id="header">
          <h1 className="display-4 fadein fadein-first">Thank you.</h1>
          <form>
            <div className="form-group fadein fadein-second">
              <input
                id="userName"
                onChange={this.handleChange}
                placeholder="Your Name"
                value={userName}
                className="form-control form-control-lg"
                type="text"
              />
            </div>
            <div className="form-group fadein fadein-second">
              <input
                id="userCompany"
                onChange={this.handleChange}
                placeholder="Your Company"
                value={userCompany}
                className="form-control form-control-lg"
                type="text"
              />
            </div>
            <div className="form-group fadein fadein-third">
              <input
                id="userEmail"
                onChange={this.handleChange}
                placeholder="Your Email"
                value={userEmail}
                className="form-control form-control-lg"
                type="email"
              />
            </div>
            <div className="form-group fadein fadein-third">
              <input
                id="userPassword"
                onChange={this.handleChange}
                placeholder="Your Password"
                value={userPassword}
                className="form-control form-control-lg"
                type="password"
              />
            </div>
            <div className="form-group fadein fadein-fourth">
              <input
                id="userPasswordConfirmation"
                onChange={this.handleChange}
                placeholder="Password Confirmation"
                value={userPasswordConfirmation}
                className="form-control form-control-lg"
                type="password"
              />
            </div>
            <div className="form-group fadein fadein-fourth">
              <button
                className="btn btn-dark btn-lg btn-block"
                type="submit"
                onClick={this.handleLogin}
              >
                Register
              </button>
              <small className="form-text text-black">
                Already registered?,
                <a href="/login">click here</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
  loginSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

const mapDispatchToProps = dispatch => ({
  loginSubmit: credential => {
    dispatch(login(credential));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
