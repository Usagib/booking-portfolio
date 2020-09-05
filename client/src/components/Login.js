import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      authToken: '',
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
      case 'Email':
        this.setState({
          userEmail: event.target.value,
        });
        break;
      case 'Password':
        this.setState({
          userPassword: event.target.value,
        });
        break;
      default:
        return this.state;
    }
    return false;
  }

  handleLogin(event) {
    event.preventDefault();
    const { userEmail, userPassword } = this.state;
    const { loginSubmit, cookies } = this.props;

    axios.post('https://usagi-booking-api.herokuapp.com/api/auth/login',
      {
        email: userEmail,
        password: userPassword,
      }
    ).then(response => {
      this.setState({
        userPassword: '',
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
    }).catch((error) => {console.log(error)});
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('authToken') !== 'null' && cookies.get('authToken') !== undefined) {
      return <Redirect to="/profile" />;
    }
    return true;
  }

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <div className="login-container">
        {this.renderRedirect()}
        <div className="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
          <h1 className="display-4 fadein fadein-first">Hello.</h1>
          <form>
            <div className="form-group fadein fadein-second">
              <input
                id="Email"
                onChange={this.handleChange}
                placeholder="Your Email"
                value={userEmail}
                className="form-control form-control-lg"
                type="email"
              />
            </div>
            <div className="form-group fadein fadein-third">
              <input
                id="Password"
                onChange={this.handleChange}
                placeholder="Your Password"
                value={userPassword}
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
                Log In
              </button>
              <small className="form-text text-black">
                Not yet registered?,
                <a href="/signup">click here</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  credentials: state.authentication,
  cookies: ownProps.cookies,
});

const mapDispatchToProps = dispatch => ({
  loginSubmit: credential => {
    dispatch(login(credential));
  },
});

Login.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
  loginSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
