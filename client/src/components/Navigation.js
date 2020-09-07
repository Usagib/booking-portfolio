import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserNavigation from './UserNavigation';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.refreshNav = this.refreshNav.bind(this);
    this.state = {
      toggleSidebar: '',
    };
  }

  toggleSidenav() {
    const { toggleSidebar } = this.state;
    const css = (toggleSidebar === 'active') ? '' : 'active';
    this.setState({
      toggleSidebar: css,
    });
  }

  refreshNav() {
    const { cookies } = this.props;
    if (cookies.get('id') === 'null') {
      window.location.reload(false);
      cookies.set('id', 0, { path: '/' });
    }
  }

  render() {
    const { cookies } = this.props;
    const { toggleSidebar } = this.state;
    const logged = cookies.get('authToken') !== 'null' && cookies.get('authToken') !== undefined;
    return (
      <div>
        <button
          type="button"
          id="sidebarCollapse"
          className="btn"
          onClick={this.toggleSidenav}
          style={{
            position: 'fixed',
            zIndex: '99',
            top: '5%',
            left: '5%',
            backgroundColor: '#ffffff00',
          }}
        >
          <img src="navphoto.png" alt="..." width="80" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
        </button>
        <div className={`vertical-nav bg-white toggleSidebar ${toggleSidebar}`} id="sidebar">
          <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-items-center">
              <button
                type="button"
                id="sidebarCollapseInner"
                className="btn"
                onClick={this.toggleSidenav}
                style={{
                  backgroundColor: '#ffffff00',
                }}
              >
                <img src="navphoto.png" alt="..." width="80" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
              </button>
              <div className="media-body">
                <h4 className="m-0">Eduardo Bonilla</h4>
                <p className="font-weight-light text-muted mb-0">Developer and so much more</p>
              </div>
            </div>
          </div>
          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Me</p>

          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a href="/" className="nav-link text-dark font-italic bg-light">
                <i className="fa fa-th-large mr-3 text-primary fa-fw" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link text-dark font-italic">
                <i className="fa fa-address-card mr-3 text-primary fa-fw" />
                Services
              </a>
            </li>
          <li className="nav-item">
            <a href="/catalog" className="nav-link text-dark font-italic">
              <i className="fa fa-address-card mr-3 text-primary fa-fw" />
              Select a service
            </a>
          </li>
        </ul>

          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">You</p>
          <UserNavigation loggedIn={logged} />
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(Navigation);
