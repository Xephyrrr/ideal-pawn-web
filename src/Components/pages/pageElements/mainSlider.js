import React from 'react';
import Scroll from './scrollAnim';



class MainSlider extends React.Component {
  render() {
    return (
      <div className="parallax-wrapper">

         <div className="text">Family Owned Georgia Raised</div>

           <video autoplay="on" loop muted>
              <source src="./images/slides/1920.mp4" type="video/mp4"/>
           </video>

       </div>

    );
  }
}

export default MainSlider;
