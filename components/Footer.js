import React from 'react';


const Footer = () => (

        <>
             <footer className="footer">
                    <div className="footer__logo-box">
                            <picture className="footer__logo">
                                <source srcSet="../static/logo-green-small-1x.png 1x, ../static/logo-green-small-2x.png 2x"
                                media="(max-width: 37.5em)"/>
                                <img srcSet="../static/logo-green-1x.png 1x ../static/logo-green-2x.png 2x" alt="Full logo" src="../static/logo-green-2x.png"/>
                            </picture>
                    </div>

                    <div className="row">
                          <div className="col-1-of-2">
                                  <div className="footer__navigation">
                                          <ul className="footer__list">
                                                  <li className="footer__item">
                                                      <a href="#" className="footer__link">
                                                            Company
                                                      </a>
                                                  </li>
                                                  <li className="footer__item">
                                                      <a href="#" className="footer__link">
                                                            Contact us
                                                     </a>
                                                  </li>
                                                  <li className="footer__item">
                                                       <a href="#" className="footer__link">
                                                            Careers
                                                       </a>
                                                  </li>
                                                  <li className="footer__item">
                                                        <a href="#" className="footer__link">
                                                              Privacy policy
                                                        </a>
                                                  </li>
                                                  <li className="footer__item">
                                                       <a href="#" className="footer__link">
                                                                Terms
                                                       </a>
                                                  </li>
                                          </ul>
                                  </div>
                          </div>

                          <div className="row">
                                  <div className="col-1-of-2">
                                        <p className="footer__copyright">
                                               Built by <a href="#" className="footer__link">Ernie Buyco</a>  <a href="#" className="footer__link">This is React App</a>.
                                            Copyright &copy; by Ernie buyco. You are 100% allowed to use this webpage for both personal
                                            and commercial use, but NOT to claim it as your own design. A credit to the original author, Ernie Buyco
                                           , is of course highly appreciated!
                                        </p>
                                  </div>
                          </div>
                    </div>
             </footer>

        </>
);

export default Footer;
