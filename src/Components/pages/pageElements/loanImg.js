import React from 'react';
import Scroll from './scrollAnim';
import { Parallax, Background } from 'react-parallax';

function LoanImg(){

  return(

    <div className="loanImgGrid">
      <Parallax className="loanImgwrap" bgImage='/images/money.jpg'strength={500}>

          <div className="loanImgHeader">Get A Loan</div>

      </Parallax>
  <Scroll />
    </div>


  )
}
export default LoanImg;
