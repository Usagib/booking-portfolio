import React from 'react';

const Home = () => (
  <header>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{
            background: 'url(\'railsmain.png\')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="carousel-caption d-none d-md-block">
            <h2 className="home-title fadein">Usagi Develops</h2>
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
            <h2 className="home-title fadein">Usagi Designs</h2>
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
            <h2 className="home-title fadein">Usagi Creates</h2>
          </div>
        </div>
      </div>
    </div>
  </header>

);

export default Home;
