import React from 'react';
import { connect } from 'react-redux';

class Services extends React.Component {
  constructor(props){
    super(props);
    this.handleCookie = this.handleCookie.bind(this);
  }

  handleCookie() {
    const { cookies } = this.props;
    cookies.set('lastService', null, { path:'/' });
  }

  render() {
    const { cookies } = this.props;
    return(
      <header>
        {this.handleCookie()}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{
              background: `url('3dprint.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="carousel-caption d-none d-md-block">
              <span>
                  <h1 className="display-2 text-white">3d Printing</h1>
              </span>
              <button className="btn-dark btn float-center">
                <a href='/serviceselect'><h1 className="display-5">Require a service</h1></a>
              </button>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              background: `url('project.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="carousel-caption d-none d-md-block">
              <span>
                  <h1 className="display-2 text-white">Project Management</h1>
              </span>
              <button className="btn-dark btn float-center">
                <a href='/serviceselect'><h1 className="display-5">Require a service</h1></a>
              </button>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              background: `url('support.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="carousel-caption d-none d-md-block">
              <span>
                  <h1 className="display-2 text-white">Technical Support</h1>
              </span>
              <button className="btn-dark btn float-center">
                <a href='/serviceselect'><h1 className="display-5">Require a service</h1></a>
              </button>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              background: `url('stationery.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="carousel-caption d-none d-md-block">
              <span>
                  <h1 className="display-2 text-white">Stationery Design</h1>
              </span>
              <button className="btn-dark btn float-center">
                <a href='/serviceselect'><h1 className="display-5">Require a service</h1></a>
              </button>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              background: `url('railsmain.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="carousel-caption d-none d-md-block">
              <span>
                  <h1 className="display-2 text-dark">Backend Development</h1>
              </span>
              <button className="btn-dark btn float-center">
                <a href='/serviceselect'><h1 className="display-5">Require a service</h1></a>
              </button>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              background: `url('reactmain.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="carousel-caption d-none d-md-block">
              <span>
                  <h1 className="display-2 text-dark">Frontend Design</h1>
              </span>
              <button className="btn-dark btn float-center">
                <a href='/serviceselect'><h1 className="display-5">Require a service</h1></a>
              </button>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              background: `url('designmain.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="carousel-caption d-none d-md-block">
              <span>
                  <h1 className="display-2 text-dark">Graphic Design</h1>
              </span>
              <button className="btn-dark btn float-center">
                <a href='/serviceselect'><h1 className="display-5">Require a service</h1></a>
              </button>
            </div>
          </div>
        </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(Services);
