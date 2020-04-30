import React , {useState, useRef} from 'react';
import NavStyle from './styles/layout/NavStyle';
import NContent from './NContent';

const Navigation = () => {


  const [open, setOpen] = useState(false);

  const node = useRef();
  const menuId = "navi-toggle";

      return(
          <NavStyle ref={node}>
            <NContent
             open={open} setOpen={setOpen} aria-controls={menuId}
              />
          </NavStyle>
      )
}


export default Navigation;
