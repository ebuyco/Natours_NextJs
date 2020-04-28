import React from 'react';
import LogoWhite from '../public/static/logo-white.png';
import HeaderStyle from '../components/styles/layout/HeaderStyle';

const Header = () => {
    return(
        <HeaderStyle>
            <header className="header">
                  <div className="header__logo-box">
                      <img src={LogoWhite} alt="logo" className="header__logo"/>
                  </div>

                  <div className="header__text-box">
                          <h1 className="heading-primary">
                                  <span className="heading-primary--main">
                                        Outdoors
                                    </span>
                                    <span className="heading-primary--sub">
                                          is Where life happens
                                    </span>
                          </h1>
                          <a href="#section-tours" className="btn btn--white btn--animated">Discover Our Tours</a>
                  </div>
            </header>
        </HeaderStyle>
    )
}

export default Header;