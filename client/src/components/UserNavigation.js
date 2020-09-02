import React from 'react';
import { connect } from 'react-redux';

const UserNavigation = props => {
  const { loggedIn } = props;
  if ( loggedIn ) {
    return (
      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <a href="/profile" className="nav-link text-dark font-italic">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a href="/logout" className="nav-link text-dark font-italic">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            logout
          </a>
        </li>
      </ul>
      )
    } else {
      return(
        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <a href="/login" className="nav-link text-dark font-italic">                <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="/signup" className="nav-link text-dark font-italic">
              <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
              Signup
            </a>
          </li>
        </ul>
      )
    }
};
export default UserNavigation;
