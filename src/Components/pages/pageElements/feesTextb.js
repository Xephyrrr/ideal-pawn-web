import React from 'react';
import { Parallax } from 'react-parallax'


function LoanFeesb() {
  return (
    <div className="fessTextbGrid">
      <div className="feesTextbWrap" >

         <div className="feesTextbContent">
          <div className="feesTextbHeader">
            Terms And Fees.
          </div>
          <div className="feesTextb">
              There is <u>NO</u> need for credit. <br /> Your item <u>IS</u> your credit.
          </div>
          <div className="feesTextb2">
            Setup Fee: <a>$0.00 </a> <br/> Pawn Loan late Fee (5 days after due date)<a> 10% of principal amount</a> <br/> Lost Ticket Charge:<a> $0.00 </a> <br/>Storage Fee: Up to <a>$5.00 Per Month</a> of Portion Thereof On All Items Exceeding (1) One Cubic Foot in Volume (Except Vehicles)<br/> Vehicle Storage Fee: Up to <a> $5.00 Per Day</a> <br /> Firearm Fee: <a>$5.00  Per Firearm</a>
          </div>

        </div>
      </div>
    </div>
);

}

export default LoanFeesb;
