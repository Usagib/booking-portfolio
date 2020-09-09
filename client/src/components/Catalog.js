import React from 'react';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Catalog = () => (
  <header>
    <div className="container catalog-container">
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <h1 className="fadein fadein-first catalog-title">Popular Services</h1>
          <p className="fadein fadein-second catalog-subtitle">Select your prefered service</p>
        </div>
      </div>
      <div className="row select mt-5 fadein fadein-third">
        <a className="carousel-control-prev" href="#selectCarousel" role="button" data-slide="prev">
          <div className="carousel-control-prev-icon" aria-hidden="true">
            <button type="button" className="btn btn-carousel">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
          </div>
        </a>
        <a className="carousel-control-next" href="#selectCarousel" role="button" data-slide="next">
          <button type="button" className="btn btn-carousel btn-right">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </a>
        <div className="col-md-12">
          <div id="selectCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item inner-sv active">
                <div className="row">
                  <div className="col-md-3 mx-auto my-auto text-center">
                    <a href="/serviceselect">
                      <div className="rounded-circle service-img-wrapper">
                        <img alt="svprint" className="service-img img-fluid" src="/service1.png" />
                      </div>
                    </a>
                    <h2>3d Printing</h2>
                    <p>Model and printing of any piece with certified materials</p>
                    <div className="row">
                      <div className="col-md-12 text-center center">
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mx-auto my-auto text-center">
                    <a href="/serviceselect">
                      <div className="rounded-circle service-img-wrapper">
                        <img alt="svFe" className="service-img img-fluid" src="/service2.png" />
                      </div>
                    </a>
                    <h2>FrontEnd Design</h2>
                    <p>UX/UI Design with React</p>
                    <div className="row">
                      <div className="col-md-12 text-center center">
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mx-auto my-auto text-center">
                    <a href="/serviceselect">
                      <div className="rounded-circle service-img-wrapper">
                        <img alt="svbE" className="service-img img-fluid" src="/service3.png" />
                      </div>
                    </a>
                    <h2>Backend Dev</h2>
                    <p>Software Development with Ruby on Rails</p>
                    <div className="row">
                      <div className="col-md-12 text-center center">
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item inner-sv">
                <div className="row">
                  <div className="col-md-3 mx-auto my-auto text-center">
                    <a href="/serviceselect">
                      <div className="rounded-circle service-img-wrapper">
                        <img alt="svGd" className="service-img img-fluid" src="/service4.png" />
                      </div>
                    </a>
                    <h2>Graphic Design</h2>
                    <p>Graphict design and company branding</p>
                    <div className="row">
                      <div className="col-md-12 text-center center">
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mx-auto my-auto text-center">
                    <a href="/serviceselect">
                      <div className="rounded-circle service-img-wrapper">
                        <img alt="svSp" className="service-img img-fix img-fluid" src="/service5.png" />
                      </div>
                    </a>
                    <h2>Production</h2>
                    <p>Competitive publicity printing</p>
                    <div className="row">
                      <div className="col-md-12 text-center center">
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mx-auto my-auto text-center">
                    <a href="/serviceselect">
                      <div className="rounded-circle service-img-wrapper">
                        <img alt="svTs" className="service-img img-fluid" src="/service6.png" />
                      </div>
                    </a>
                    <h2>Tech Support</h2>
                    <p>Private and corporative technical support</p>
                    <div className="row">
                      <div className="col-md-12 text-center center">
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        <button type="button" className="mx-2 btn rounded-circle">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Catalog;
