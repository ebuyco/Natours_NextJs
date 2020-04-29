import React from 'react';

// Components style import
import Grid from '../components/styles/base/Grid';
import Utilities from '../components/styles/base/Utilities';
import Typography from '../components/styles/base/Typography';
import Composition from '../components/styles/base/Composition';
import AboutStyle from '../components/styles/layout/AboutStyle';
import Button from '../components/styles/base/Button';


//Image import from public folder source
import Nat1 from '../public/static/nat-1-large.jpg';
import Nat2 from '../public/static/nat-2-large.jpg';
import Nat3 from '../public/static/nat-3-large.jpg';


const AboutSection = () => (
      <AboutStyle>
          <section className="section-about">
                      <Utilities>
                       <Typography>
                          <div className="u-center-text u-margin-bottom-big">
                                <h2 className="heading-secondary">
                                            Exciting tours for adventures people
                                </h2>
                          </div>

                <Grid>
                    <div className="row">
                          <div className="col-1-of-2">
                             <h3 className="heading-tertiary u-margin-bottom-small">You're not going to fall in love with nature </h3>
                              <p className="paragraph">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                  ducimus quam nisi exercitationem omnis earum qui.
                              </p>
                              <h3 className="heading-tertiary u-margin-bottom-small">
                                    Live adventures like you never had before
                              </h3>
                              <p className="paragraph">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                              </p>
                              <Button>
                                 <a href="#" className="btn-text">Learn more &rarr;</a>
                              </Button>
                          </div>
                          <div className="col-1-of-2">
                                <Composition>
                                    <div className="composition">
                                      {/* <img src={Nat1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                                      <img src={Nat2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                                      <img src={Nat3} alt="Photo 3" className="composition__photo composition__photo--p3"/> */}

                          <img srcSet="../static/nat-1.jpg 300w, ../static/nat-1-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo 1"
                            className="composition__photo composition__photo--p1"
                            src={Nat1}/>


                            <img srcSet="../static/nat-2.jpg 300w, ../static/nat-2-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 className="composition__photo composition__photo--p2"
                                 src={Nat2}/>

                            <img srcSet="../static/nat-3.jpg 300w,../static/nat-3-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 className="composition__photo composition__photo--p3"
                                 src={Nat3}/>

                                    </div>

                                </Composition>

                          </div>

                     </div>
                </Grid>
                       </Typography>
                       </Utilities>
          </section>

      </AboutStyle>
);

export default AboutSection;
