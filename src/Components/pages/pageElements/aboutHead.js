import React from 'react';
import Scroll from './scrollAnim';
import { Parallax, Background } from 'react-parallax';

class AboutHead extends React.Component {
  render() {
    return (
      <div className="about-head-grid">
        <Parallax className="about-head-wrap" bgImage='/images/fam.jpg'strength={500}>

            <div className="about-head-text">About Our Family</div>

        </Parallax>
    <Scroll />
      </div>


    );
  }
}

export default AboutHead;
