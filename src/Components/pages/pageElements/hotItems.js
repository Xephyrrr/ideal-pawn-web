import React from 'react';


function HotItems(){
  return(

        <div className="hotItemsGrid">
          <div className="hotItemWrap">

          <div className="hotItemsHeader">

            <h1>
              Current Hot Items
            </h1>

             <div className="hotItemsSubTitle">
              See the items that we are currently on the lookout for. <br/> These items will get you top dollar offers!
             </div>

          </div>

          <div className='hotItems'>
            <div className="hotItemContainer">

                <img src='/images/sellWatch@3x.png' id="music"/>
                  <ul className="musicEquip">
                    <li> Guitars </li>
                    <li> Drum Sets </li>
                    <li> Synths </li>
                    <li> Speakers </li>
                    <li> Mixers </li>
                  </ul>
            </div>

            <div className="hotItemContainer">

                <img src='/images/sellWatch@3x.png' id="watches"/>
                  <ul className="luxWatches">
                    <li> Rolex </li>
                    <li> Cartier </li>
                    <li> Piaget </li>
                    <li> Omega </li>
                    <li> Zenith </li>
                  </ul>
            </div>

            <div className="hotItemContainer">

                <img src='/images/sellWatch@3x.png' id="hotfirearms"/>
                  <ul className="hotFirearms">
                    <li> Shotguns </li>
                    <li> Rifles </li>
                    <li> Pistols </li>
                    <li> Revolvers </li>
                    <li> Firearms </li>
                  </ul>
            </div>

            <div className="hotItemContainer">

                <img src='/images/sellWatch@3x.png' id="streetwear"/>
                  <ul className="vinStreetwear">
                    <li> Nike </li>
                    <li> Adidas </li>
                    <li> Gucci </li>
                    <li> Undefeated </li>
                    <li> Vintage Wear </li>
                  </ul>
            </div>
          </div>

        </div>
      </div>



  );
}

export default HotItems;
