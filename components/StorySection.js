import React from 'react';


const StorySection = () => (


                        <>
                        <section className="section-stories">

                            <div className="bg-video">
                                  <video autoPlay muted loop className="bg-video__content">
                                          <source src="../static/video.mp4" type="video/mp4"/>
                                          <source src="../static/video.webm" type="video/webm"/>
                                  </video>
                            </div>

                            <div className="u-center-text u-margin-bottom-big">
                                  <h2 className="heading-secondary">
                                        We make people genuinely happy
                                  </h2>
                            </div>

                            <div className="row">
                                <div className="story">
                                          <figure className="story__shape">
                                                  <img src="../static/nat-8.jpg"
                                                  alt="Person on a tour"
                                                  className="story__img"/>
                                                  <figcaption className="story__caption">
                                                          Mary Smith
                                                  </figcaption>
                                          </figure>
                                          <div className="story__text">
                                                  <h3 className="heading-tertiary u-margin-bottom-small">
                                                            I had the best week ever with my family
                                                  </h3>
                                                  <p>
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                                  ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                                  repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                                                  </p>
                                          </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="story">
                                          <figure className="story__shape">
                                                  <img src="../static/nat-9.jpg"
                                                  alt="Person on a tour"
                                                  className="story__img"/>
                                                  <figcaption className="story__caption">
                                                          Mary Smith
                                                  </figcaption>
                                          </figure>
                                          <div className="story__text">
                                                  <h3 className="heading-tertiary u-margin-bottom-small">
                                                            I had the best week ever with my family
                                                  </h3>
                                                  <p>
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                                  ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                                  repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                                                  </p>
                                          </div>
                                </div>
                            </div>

                            <div className="u-center-text u-margin-top-huge">
                              <a href="#" className="btn-text">Read all stories &rarr;</a>
                            </div>
                            </section>

                        </>



);


export default StorySection;
