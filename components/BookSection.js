import React from 'react';
import Grid from '../components/styles/base/Grid';
import Typography from '../components/styles/base/Typography';
import Button from '../components/styles/base/Button';
import Utilities from '../components/styles/base/Utilities';
import FormStyle from '../components/styles/base/Form.js';
import BookStyle from '../components/styles/layout/BookStyle';

const BookSection = () => (
      <BookStyle>

            <Grid>
                  <Typography>
                        <Button>
                              <Utilities>
                              <FormStyle>
                              <section className="section-book">
                  <div className="row">
                        <div className="book">
                                <div className="book__form">


                                        <form
                                            action="#"
                                            className="form"
                                            >
                                              <div className="u-margin-bottom-medium">
                                                      <h2 className="heading-secondary">
                                                              Start booking now
                                                      </h2>
                                              </div>

                                              <div className="form__group">
                                                  <input type="text"
                                                  className="form__input"
                                                  placeholder="Full Name"
                                                  id="name"
                                                  required
                                                  />
                                                <label htmlFor="name"
                                                className="form__label"
                                                >Full name</label>
                                              </div>

                                              <div className="form__group">
                                                  <input type="email"
                                                  className="form__input"
                                                  placeholder="Email address"
                                                  id="email"
                                                  required
                                                  />
                                                <label htmlFor="email"
                                                className="form__label"
                                                >Email address</label>
                                              </div>

                                              <div
                                              className="form__group u-margin-bottom-medium"
                                              >
                                                <div className="form__radio-group">
                                                      <input type="radio"
                                                      className="form__radio-input"
                                                      id="small"
                                                      name="size"
                                                      />
                                                     <label htmlFor="small" className="form__radio-label">
                                                          <span className="form__radio-button"></span>
                                                          Small tour group
                                                    </label>
                                                </div>


                                                <div className="form__radio-group">
                                                    <input type="radio"
                                                    className="form__radio-input"
                                                    id="large"
                                                    name="size"
                                                    />
                                                    <label htmlFor="large" className="form__radio-label">
                                                          <span className="form__radio-button"></span>
                                                          Large tour group
                                                    </label>
                                              </div>

                                              </div>

                                                <div className="form__group">
                                                      <button className="btn btn--green">Next step &rarr;</button>
                                                </div>

                                            </form>



                                </div>
                        </div>
                  </div>
          </section>
          </FormStyle>
                              </Utilities>
                        </Button>
                  </Typography>
            </Grid>

      </BookStyle>
);


export default BookSection;
