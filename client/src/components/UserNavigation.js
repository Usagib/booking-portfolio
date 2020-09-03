import React from 'react';
import PropTypes from 'prop-types';

const UserNavigation = props => {
  const { loggedIn } = props;
  if (loggedIn) {
    return (
      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <a href="/profile" className="nav-link text-dark font-italic">
            <i className="fa fa-address-card mr-3 text-primary fa-fw" />
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a href="/logout" className="nav-link text-dark font-italic">
            <i className="fa fa-address-card mr-3 text-primary fa-fw" />
            logout
          </a>
        </li>
      </ul>
    );
  }
  return (
    <ul className="nav flex-column bg-white mb-0">
      <li className="nav-item">
        <a href="/login" className="nav-link text-dark font-italic">
          {' '}
          <i className="fa fa-cubes mr-3 text-primary fa-fw" />
          Login
        </a>
      </li>
      <li className="nav-item">
        <a href="/signup" className="nav-link text-dark font-italic">
          <i className="fa fa-cubes mr-3 text-primary fa-fw" />
          Signup
        </a>
      </li>
    </ul>
  );
};

UserNavigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default UserNavigation;
