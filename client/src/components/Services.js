import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faCog, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.handleCookie = this.handleCookie.bind(this);
  }

  handleCookie() {
    const { cookies } = this.props;
    cookies.set('lastService', null, { path: '/' });
  }

  render() {
    return (
      <header>
        {this.handleCookie()}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                background: 'url(\'support.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block fadein fadein-first">
                <span>
                  <h1 className="carousel-title text-white">NEW AVAILABLE SERVICES</h1>
                </span>
                <button type="button" className="fadein fadein-second btn configure-btn float-center">
                  <a href="/catalog">
                    <FontAwesomeIcon icon={faCog} />
                      <span className="mx-2">Configure</span>
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </a>
                </button>
              </div>
            </div>
          {/*  <div
              className="carousel-item"
              style={{
                background: 'url(\'project.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <span>
                  <h1 className="carousel-title text-white">Project Management</h1>
                </span>
                <button type="button" className="btn-dark btn float-center">
                  <a href="/serviceselect"><h1 className="display-5">Require a service</h1></a>
                </button>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                background: 'url(\'support.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <span>
                  <h1 className="carousel-title text-white">Technical Support</h1>
                </span>
                <button type="button" className="btn-dark btn float-center">
                  <a href="/serviceselect"><h1 className="display-5">Require a service</h1></a>
                </button>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                background: 'url(\'stationery.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <span>
                  <h1 className="carousel-title text-white">Stationery Design</h1>
                </span>
                <button type="button" className="btn-dark btn float-center">
                  <a href="/serviceselect"><h1 className="display-5">Require a service</h1></a>
                </button>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                background: 'url(\'railsmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <span>
                  <h1 className="carousel-title text-dark">Backend Development</h1>
                </span>
                <button type="button" className="btn-dark btn float-center">
                  <a href="/serviceselect"><h1 className="display-5">Require a service</h1></a>
                </button>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                background: 'url(\'reactmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <span>
                  <h1 className="carousel-title text-dark">Frontend Design</h1>
                </span>
                <button type="button" className="btn-dark btn float-center">
                  <a href="/serviceselect"><h1 className="display-5">Require a service</h1></a>
                </button>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                background: 'url(\'designmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <span>
                  <h1 className="carousel-title text-dark">Graphic Design</h1>
                </span>
                <button type="button" className="btn-dark btn float-center">
                  <a href="/serviceselect"><h1 className="display-5">Require a service</h1></a>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    );
  }
}

Services.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(Services);
