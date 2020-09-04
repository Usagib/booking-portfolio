import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    const { cookies } = this.props;
    cookies.set('id', null, { path: '/' });
    cookies.set('authToken', null, { path: '/' });
    cookies.set('email', null, { path: '/' });
    cookies.set('name', null, { path: '/' });
    cookies.set('company', null, { path: '/' });
    cookies.set('lastService', null, { path: '/' });
    window.location.reload(false);
  }

  renderRedirect() {
    const { cookies } = this.props;
    if (cookies.get('authToken') === 'null') {
      return <Redirect to="/login" />;
    }
    return true;
  }

  render() {
    return (
      <div className="login-container">
        {this.renderRedirect()}
        <div className="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
          <h1 className="display-4 fadeIn">See you later.</h1>
          <form>
            <div className="form-group fadeIn">
              <button
                className="btn btn-danger btn-lg btn-block"
                type="submit"
                onClick={this.handleLogout}
              >
                Log out
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Logout.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(Logout);
