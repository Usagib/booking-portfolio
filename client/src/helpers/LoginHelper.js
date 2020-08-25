import React from 'react';
import axios from 'axios';

class LoginHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user: 'test1@test.com',
      password: 'password',
      authToken: '',
      company: '',
    };
    this.logUser = this.logUser.bind(this);
  }

  logUser() {
    const qs = require('qs');
    const { user, password } = this.state;

    axios.post('api/auth/login', qs.stringify(
      {
        email: user,
        password: password,
      }
    )).then(response => {
       this.setState({
         user: response.data.user.email,
         name: response.data.user.name,
         authToken: response.data.auth_token,
         company: response.data.user.company,
         password: '',
       })
       console.log(this.state);
      })
      .catch(error => {console.log(error)});
  }

  render() {
    return(
        <div className="float-right mr-5">
          <p>User {this.state.user}</p>
          <p>Password {this.state.password}</p>
          <p>Authtoken{this.state.authToken}</p>
          <button type="button"
            className="btn btn-dark"
            onClick={this.logUser}
          >
            Call
          </button>
        </div>
    );
  }
}

export default LoginHelper;
