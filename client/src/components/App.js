import React from 'react';
import logo from '../logo.svg';
import Navigation from './Navigation';
import Home from './Home';
import ServiceSelect from './ServiceSelect';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import DatePicker from './DatePicker';
import Profile from './Profile';
import Logout from './Logout';
import { withCookies } from 'react-cookie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation cookies={this.props.cookies} />
          <Switch>
            <Route path="/services">
              <Services cookies={this.props.cookies} />
            </Route>
            <Route path="/serviceselect">
              <ServiceSelect cookies={this.props.cookies} />
            </Route>
            <Route path="/datepick">
              <DatePicker cookies={this.props.cookies} />
            </Route>
            <Route path="/login">
              <Login cookies={this.props.cookies}/>
            </Route>
            <Route path="/signup">
              <Signup cookies={this.props.cookies}/>
            </Route>
            <Route path="/profile">
              <Profile cookies={this.props.cookies}/>
            </Route>
            <Route path="/logout">
              <Logout cookies={this.props.cookies}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
