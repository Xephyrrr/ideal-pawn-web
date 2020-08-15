import React from 'react';
import Scroll from './scrollAnim';
import { Parallax, Background } from 'react-parallax';

function FaImg(){

  return(

    <div className="armsImgGrid">
      <Parallax className="armsImgwrap" bgImage='/images/gunman.png'strength={500}>

          <div className="armsImgHeader">Firearms</div>

      </Parallax>
  <Scroll />
    </div>


  )
}
export default FaImg;
