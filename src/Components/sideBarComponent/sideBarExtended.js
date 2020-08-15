import React, { Component } from 'react';



class SideBarExtended extends Component {
constructor(props){
  super(props);
  this.state = { isOn: true };
}

classnames = () => {
  if(this.isBoxVisible){
    return 'side_ext_wrap side_trans'
  } else {
    return 'side_ext_wrap'
  }

};

  render(){
    return(
    <div className={this.classnames()}>

      <div className='side_ext'>


      </div>

    </div>
    )
  }
}

export default SideBarExtended;
