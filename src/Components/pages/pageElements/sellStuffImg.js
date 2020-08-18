import React from 'react';
import Scroll from './scrollAnim';
import { Parallax, Background } from 'react-parallax';

function SellStuffImg(){

  return(

    <div className="sellImgGrid">
      <Parallax className="sellImgwrap" bgImage='/images/sellstuff.png'strength={500}>

          <div className="sellImgHeader">Sell Your Stuff</div>

      </Parallax>
  <Scroll />
    </div>


  )
}
export default SellStuffImg;
