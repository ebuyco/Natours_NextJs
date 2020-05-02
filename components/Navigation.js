import React , {useState} from 'react';
import NavStyle from './styles/layout/NavStyle';


const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

      return(
          <NavStyle>
              <div className="navigation">

                  <input type="checkbox" className="navigation__checkbox"/>

                  <label htmlFor="navi-toggle" className="navigation__button"
                      onClick={toggle}
                    >
                            <span
                             className={`navigation__icon__burger__${isOpen ? 'Open' : 'Close'}`}
                            >&nbsp;</span>
                             <span
                            className={`navigation__icon__closed__${isOpen ? 'Open' : 'Close'}`}
                            >X</span>
                    </label>

                    <div
                    className={`navigation__background ${isOpen ? 'Open' : 'Close'}`}
                    ></div>

                    <nav
                     className={`navigation__nav ${isOpen ? 'Open' : 'Close'}`}
                    >

                          <ul className="navigation__list">
                                    <li className="navigation__item">
                                        <a href="#about" className="navigation__link">
                                            <span>
                                              01
                                            </span>
                                            About Natous
                                        </a>
                                    </li>
                                    <li className="navigation__item">
                                        <a href="#" className="navigation__link">
                                                <span>
                                                  03
                                                </span>
                                                Popular tours
                                            </a>
                                    </li>
                                    <li className="navigation__item">
                                        <a href="#" className="navigation__link">
                                                <span>
                                                  02
                                                </span>
                                                Your Benefits
                                            </a>
                                    </li>
                                    <li className="navigation__item">
                                        <a href="#" className="navigation__link">
                                                <span>
                                                  04
                                                </span>
                                                Stories
                                            </a>
                                    </li>
                                    <li className="navigation__item">
                                        <a href="#" className="navigation__link">
                                                <span>
                                                  05
                                                </span>
                                               Book Now
                                            </a>
                                    </li>
                          </ul>
                    </nav>
              </div>
          </NavStyle>
      )
}


export default Navigation;
