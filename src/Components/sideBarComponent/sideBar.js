import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';


class SideBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      isBoxVisible: false
    };
  }


  togglebox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    console.log(this.state.isBoxVisible);
  };

  classnames = () => {
    if(this.state.isBoxVisible){
      return 'side_ext side_trans'
    } else {
      return 'side_ext'
    }

  };

  render(){
    const { isBoxVisible } = this.state;
  return(
      <>
        <div className='side_ext_wrap'>

          <div className={this.classnames()}>
            <div side_inner_wrap>
              <div className='side_contents'>
                <div className='side_contact'>
                  <div style={{fontSize:22}}>Call Us</div>
                  <div style={{fontSize:15}}>+1 770 493 1986</div>
                </div>
                <div className='side_email'>
                  <div style={{fontSize:22}}>Email Us</div>
                  <div style={{fontSize:15}}>inquire@idealpawn.com</div>
                </div>
                <div className='side_map_container'>
                  <div style={{fontSize:22}}>Find Us</div>
                  <div style={{fontSize:15}}>On the left side of Northcrest Rd near Spaghetti Junctinon and I-85</div>
                  <div className='side_map_main'>
                  <Image src="/images/map.png"  />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

          <div className='side-bar-wrap'onClick={this.togglebox} >

            <div className='bar' >
              <div className="bar_text">
                HOW TO FIND US
              </div>
              <div className='bar_arrow' />
            </div>
          </div>
      </>
  );
}
}

export default SideBar;
