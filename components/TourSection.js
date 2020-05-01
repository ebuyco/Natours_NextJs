import React from 'react';
import Card from '../components/styles/base/Card';
import Grid from '../components/styles/base/Grid';
import Utilities from '../components/styles/base/Utilities';
import Typography from '../components/styles/base/Typography';

const SectionTour = () => (
      <>
        <Grid>
        <Card>
         <Typography>
             <Utilities>
                    <section className="section-tours" id="section-tours">
                          <div className="u-center-text u-margin-bottom-big">
                                      <h2 className="heading-secondary">
                                              Most popular tours
                                      </h2>
                          </div>

                          <div className="row">

                                    <div className="col-1-of-3">
                                          <div className="card">
                                                  <div className="card__side card__side--front">
                                                       <div className="card__picture card__picture--1">
                                                               &nbsp;
                                                       </div>
                                                       <h4 className="card__heading">
                                                            <span className="card__heading-span card__heading-span--1">
                                                                    The Sea Explorer
                                                            </span>
                                                       </h4>
                                                        <div className="card__details">
                                                              <ul>
                                                                    <li>3 day tours</li>
                                                                    <li>Up to 30 people</li>
                                                                    <li>2 tour guides</li>
                                                                    <li>Sleep in cozy hotels</li>
                                                                    <li>Difficult: easy</li>
                                                              </ul>
                                                        </div>
                                                  </div>
                                                  <div className="card__side card__side--back card__side--back-1">
                                                               <div className="card__cta">
                                                                      <div className="card__price-box">
                                                                              <p className="card__price-only">Only</p>
                                                                              <p className="card__price-value">$297</p>
                                                                      </div>
                                                                      <a href="#popup" className="btn btn--white">Book now!</a>
                                                               </div>
                                                  </div>
                                          </div>
                                    </div>
                          </div>
                    </section>
               </Utilities>
            </Typography>
            </Card>
            </Grid>
      </>

);

export default SectionTour;
