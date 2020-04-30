import React, {useState} from 'react';


const NContent = (props) => {

  let attachedClasses = [props.Close ? 'Close' : 'Close'];
  if (props.open) {
      attachedClasses =  [props.Open ? 'Open' : 'Open'];
  }

    

  return(
      <>

      </>
  )
};


export default NContent;
