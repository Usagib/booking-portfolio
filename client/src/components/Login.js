import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { logCredentials } from '../actions/index';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    switch(event.target.id) {
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
    const qs = require('qs');
    const { userEmail, userPassword } = this.state;
    event.preventDefault();

    axios.post('api/auth/login', qs.stringify(
      {
        email: userEmail,
        password: userPassword,
      }
    )).then(response => {
       this.setState({
         userPassword: '',
         authToken: response.data.auth_token,
         name: response.data.user.name,
         company: response.data.user.company,
       })
       logCredentials(this.state);
       console.log(response);
       console.log(this.state);

      })
      .catch(error => {console.log(error)});

  }

  render(){
    const { userEmail, userPassword } = this.state;
    return (
      <div className="login-container">
        <div className="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
          <h1 className="display-4">Hello.</h1>
          <form>
              <div className="form-group">
                  <input
                    id="Email"
                    onChange={this.handleChange}
                    placeholder="Your Email"
                    value={userEmail}
                    className="form-control form-control-lg"
                    type="email"
                  />
              </div>
              <div className="form-group">
                  <input
                    id="Password"
                    onChange={this.handleChange}
                    placeholder="Your Password"
                    value={userPassword}
                    className="form-control form-control-lg"
                    type="password"/>
              </div>
              <div className="form-group">
                  <button
                    className="btn btn-dark btn-lg btn-block"
                    type="submit"
                    onClick={this.handleLogin}
                    >
                      Log In
                    </button>
                    <small className="form-text text-black">Not yet registered?, <a href="/signup">click here</a></small>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  credentials: state.data,
});

const mapDispatchToProps = dispatch => ({
  logCredentials: credential => {
    dispatch(logCredentials(credential));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
