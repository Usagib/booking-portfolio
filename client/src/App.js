import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ServiceSelect from './components/ServiceSelect';
import Services from './components/Services';
import Login from './components/Login';
import Signup from './components/Signup';
import DatePicker from './components/DatePicker';
import Profile from './components/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


{/*
  <div className="App">
  <Navigation />
  <Home />
  <Services />
  <ServiceSelect />
</div>

  */}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/serviceselect">
            <ServiceSelect />
          </Route>
          <Route path="/datepick">
            <DatePicker />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
