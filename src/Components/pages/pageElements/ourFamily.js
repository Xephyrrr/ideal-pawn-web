import React from 'react';

class OurFamily extends React.Component {
  render() {
    return (
      <div className="ourFamGrid">
        <div className='ourFamImgs'>
          <h1>Our Family</h1>

          <div className='famImgsFlex'>

            <div className="famImgsWrap">
              <img src='/images/Group45.png' id="fam1"/>
              <div className="aboutNames">Ben Zager</div>
            </div>

            <div className="famImgsWrap">
              <img src='/images/Group46.png' id="fam2"/>
              <div className="aboutNames">Ben Zager</div>
            </div>

            <div className="famImgsWrap">
              <img src='/images/Group47.png' id="fam3"/>
              <div className="aboutNames">Ben Zager</div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default OurFamily;
