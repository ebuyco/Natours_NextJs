import React from 'react';
import Grid from '../components/styles/base/Grid';
import Typography from '../components/styles/base/Typography';
import Utilities from '../components/styles/base/Utilities';
import FeatureBoxStyle from './styles/base/FeatureBoxStyle';
import FeatureStyle from '../components/styles/layout/FeatureStyle';

import World from '../public/static/world.svg';
import Compass from '../public/static/compass.svg';
import Maps from '../public/static/maps.svg';
import Heart from '../public/static/heart.svg';

const FeatureSection = () => (
      <FeatureStyle>
                    <FeatureBoxStyle>
                <section className="section-features">
                        <Grid>
                        <Typography>
                          <Utilities>
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
                              </Utilities>
                          </Typography>
                        </Grid>
                </section>

          </FeatureBoxStyle>
      </FeatureStyle>
);


export default FeatureSection;
