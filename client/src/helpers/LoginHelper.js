import React from 'react';
import axios from 'axios';

class LoginHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'test1@test.com',
      password: 'password',
      authToken: '',
    };
    this.logUser = this.logUser.bind(this);
  }

  logUser() {
    const qs = require('qs');
    const { user, password } = this.state;
    console.log(user);
    console.log(password);
    let authOption = {
      mode: 'cors',
      method: 'POST',
      url: 'http://localhost:3001/auth/login/',
      data: {
        email: user,
        password: password,
      },
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001/auth/login/'
      },
      json: true,
    };

    axios(authOption).then(response => {
        console.log(response);
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
