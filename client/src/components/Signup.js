import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from '../actions/index';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmation: '',
      userName: '',
      userCompany: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    switch(event.target.id) {
      case 'userName':
        this.setState({
          userName: event.target.value,
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
          userCompany: event.target.value,
        });
        break;
      default:
        return this.state;
    }
    return false;
  }

  handleLogin(event) {
    const qs = require('qs');
    const { userName,
      userEmail,
      userPassword,
      userPasswordConfirmation,
      userCompany } = this.state;
    event.preventDefault();

    axios.post('api/signup', qs.stringify(
      {
        name: userName,
        email: userEmail,
        password: userPassword,
        password_confirmation: userPasswordConfirmation,
        company: userCompany,
      }
    )).then(response => {
       /*this.setState({
         userPassword: '',
         authToken: response.data.auth_token,
         name: response.data.user.name,
         company: response.data.user.company,
       })*/
       login(this.state);
       console.log(response);
       console.log(this.state);

      })
      .catch(error => {console.log(error)});

  }

  render(){
    const { userName,
      userEmail,
      userPassword,
      userPasswordConfirmation,
      userCompany } = this.state;
    return (
      <div className="login-container">
        <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black" id="header">
          <h1 class="display-4">Thank you.</h1>
          <form>
            <div class="form-group">
              <input
                  id="userName"
                  onChange={this.handleChange}
                  placeholder="Your Name"
                  value={userName}
                  className="form-control form-control-lg"
                  type="text"
              />
            </div>
            <div class="form-group">
              <input
                  id="userCompany"
                  onChange={this.handleChange}
                  placeholder="Your Company"
                  value={userCompany}
                  className="form-control form-control-lg"
                  type="text"
              />
            </div>
            <div class="form-group">
              <input
                  id="userEmail"
                  onChange={this.handleChange}
                  placeholder="Your Email"
                  value={userEmail}
                  className="form-control form-control-lg"
                  type="email"
              />
            </div>
            <div class="form-group">
              <input
                  id="userPassword"
                  onChange={this.handleChange}
                  placeholder="Your Password"
                  value={userPassword}
                  className="form-control form-control-lg"
                  type="password"
              />
            </div>
            <div class="form-group">
              <input
                  id="userPasswordConfirmation"
                  onChange={this.handleChange}
                  placeholder="Password Confirmation"
                  value={userPasswordConfirmation}
                  className="form-control form-control-lg"
                  type="password"
              />
            </div>
            <div class="form-group">
              <button
                className="btn btn-dark btn-lg btn-block"
                type="submit"
                onClick={this.handleLogin}
              >
                Register
              </button>
              <small className="form-text text-black">Already registered?, <a href="/login">click here</a></small>
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

const mapDispatchToProps = dispatch => {
  return {
    login: (credential) => {
      dispatch(login(credential))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
