import React from 'react';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import LogIn from './logIn'


const popover = (
  <Popover id="AccBtn">
    <Popover.Title as="h3"> Login </Popover.Title>
    <Popover.Content>
      <LogIn />
    </Popover.Content>
  </Popover>
);
const AccBtn = () => {
  return(


  <div className="account">

    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="transparent" size = "12px">ACCOUNT</Button>
    </OverlayTrigger>


  </div>
);
}

export default AccBtn;
