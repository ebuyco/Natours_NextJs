import React , {useState} from 'react';
import NavStyle from './styles/layout/NavStyle';
import NContent from './NContent';

const Navigation = () => {
  const [toogleDrawerisVisible, setTogglehandlerVisible] = useState(false);

  const toogleDrawerClosedHandler = () => {
    toogleDrawerisVisible(false);
  }

  const setTogglehandler = () => {
      setTogglehandlerVisible(!toogleDrawerisVisible)
      console.log('test')
  }



      return(
          <NavStyle>
              <NContent
                 open={toogleDrawerisVisible}
                 closed={toogleDrawerClosedHandler}
                 toggleHandler={setTogglehandler}
              />
          </NavStyle>
      )
}


export default Navigation;
