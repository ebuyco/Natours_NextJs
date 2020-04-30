import React from 'react';


const NContent = (props) => {

  let attachedClasses = [props.Close ? 'Close' : 'Close'];
  if (props.open) {
    attachedClasses = [props.Open ? 'Open' : 'Open'];
  }

  let preClasses = [props.setClose ? 'setClose' : 'setClose'];
  if (props.open) {
    preClasses = [props.setOpen ? 'setOpen' : 'setOpen'];
  }


  return(
      <>
            <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox"/>

                    <label htmlFor="navi-toggle"
                    // className="navigation__button"
                    className={`navigation__button ${attachedClasses.join('')}`}
                    >
                            <span
                            className="navigation__icon"
                            onClick={props.toggleHandler}
                            >&nbsp;</span>
                    </label>

                    <div className="navigation__background">&nbsp;</div>

                    <nav
                    className={`navigation__nav__${preClasses.join('')}`}

                    >
                         <label htmlFor="navi-toggle"
                        className={`navigation__button__inside__${attachedClasses.join('')}`}
                    >

                    </label>
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
      </>
  )
};


export default NContent;
