import React from 'react';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import ServiceSelect from './ServiceSelect';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import DatePicker from './DatePicker';
import Profile from './Profile';
import Logout from './Logout';
import Catalog from './Catalog';

const App = props => {
  const { cookies } = props;
  return (
    <Router>
      <div className="App">
        <Navigation cookies={cookies} />
        <Switch>
          <Route path="/services">
            <Services cookies={cookies} />
          </Route>
          <Route path="/catalog">
            <Catalog cookies={cookies} />
          </Route>
          <Route path="/serviceselect">
            <ServiceSelect cookies={cookies} />
          </Route>
          <Route path="/datepick">
            <DatePicker cookies={cookies} />
          </Route>
          <Route path="/login">
            <Login cookies={cookies} />
          </Route>
          <Route path="/signup">
            <Signup cookies={cookies} />
          </Route>
          <Route path="/profile">
            <Profile cookies={cookies} />
          </Route>
          <Route path="/logout">
            <Logout cookies={cookies} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
};

export default withCookies(App);
