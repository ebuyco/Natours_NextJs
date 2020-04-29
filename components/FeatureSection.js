import React from 'react';

import World from '../public/static/world.svg';
import Compass from '../public/static/compass.svg';
import Maps from '../public/static/maps.svg';
import Heart from '../public/static/heart.svg';

const FeatureSection = () => (
    <>
          <section className="section-features">

                  <div className="row">
                      <div className="col-1-of-4">
                              <div className="feature-box">
                                    <img className="feature-box__icon icon-basic-world" src={World} alt="world"/>
                                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the World</h3>
                                    <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                    </p>
                              </div>
                      </div>

                      <div className="col-1-of-4">
                            <div className="feature-box">
                                    <img className="feature-box__icon icon-basic-compass" src={Compass} alt="compass"/>
                                    <h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                                    <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                    </p>
                            </div>

                      </div>

                      <div className="col-1-of-4">
                              <div className="feature-box">
                                    <img src={Maps} alt="" className="feature-box__icon icon-basic-map"/>
                                    <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                                     <p className="feature-box__text">
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                     </p>
                              </div>
                      </div>

                      <div className="col-1-of-4">
                              <div className="feature-box">
                                      <img src={Heart} alt="heart" className="feature-box__icon icon-basic-heart"/>
                                      <h3 className="heading-tertiary u-margin-bottom-small-">Live a healthier life</h3>
                                      <p className="feature-box__text">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                      </p>
                              </div>
                      </div>

                  </div>
          </section>

    </>
);


export default FeatureSection;
