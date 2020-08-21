import React from 'react'

const Services = () => (
  <header>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div
        className="carousel-item active"
        style={{
          background: `url('railsmain.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="carousel-caption d-none d-md-block">
          <h2 className="display-4"></h2>
          <p className="lead"></p>
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
          <h2 className="display-4"></h2>
          <p className="lead"></p>
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
          <h2 className="display-4"></h2>
          <p className="lead"></p>
        </div>
      </div>
    </div>
  </div>
  </header>

);

export default Services;
