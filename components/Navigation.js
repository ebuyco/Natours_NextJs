import React , {useState, useRef} from 'react';
import NavStyle from './styles/layout/NavStyle';
import NContent from './NContent';

const Navigation = () => {

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
    console.log('visible');
  };

      return(
          <NavStyle>
            <NContent
          drawerToggleClicked={sideDrawerToggleHandler}
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
              />
          </NavStyle>
      )
}


export default Navigation;
