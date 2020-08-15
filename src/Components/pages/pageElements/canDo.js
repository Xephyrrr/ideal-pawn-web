import React from 'react';
import ScrollInNav from '../../scrollAct';

function CanDo() {
  return (
      <div className="canDo">
        <div className="canDoWrap">

          <div className="canDoHeader">

            <div className="canDoTitle">
            What Ideal Can Do For You
            </div>
            <div className="canDoSubTitle">
            Ideal understands that anyone can be short on cash. We are here to provide a solution that is comfortable for you.
            </div>

          </div>


          <div className="canDoIcons">

            <div className="canDoElementWrap">
                <img src="./images/icons/dia.png"/>
                <div className="canDoText">
                Bring in any of your items of value you are willing to pawn. For the best deals make sure to check out our <a>hot items!</a>
                </div>

            </div>


            <div className="canDoElementWrap">


                <img src="./images/icons/mag.png"/>
                  <div className="canDoText">
                One of our skilled members will properly appraise your item(s) based on authenticity, current stock, condition, and current market values.
                  </div>
            </div>


            <div className="canDoElementWrap">


                <img src="./images/icons/clip.png"
                  style={{
                    marginLeft: 50,
                  }}
                  />
                  <div className="canDoText">
                We will offer you the highest dollar amount we can for your items. It’s up to you on whether you want to accept our offer or simply walk away. It’s that easy!!
                  </div>

            </div>

          </div>
          </div>
        </div>
      );
    }


export default CanDo;
