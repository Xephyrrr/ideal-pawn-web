import React from 'react';
import PolicySlider from './pageElements/policiesSlider';
import Header2 from './pageElements/header2';
import PolicyText from './pageElements/gunPolicy';
import JewelText from './pageElements/jewelryPolicy';
import ClothesText from './pageElements/clothingPolicy';
import PawnText from './pageElements/pawnPolicy';
import LateText from './pageElements/latePay';
import AppointText from './pageElements/appoint';



function Policy() {
  return (
    <div>
      <PolicySlider />
      <Header2 />

      <PolicyText />
      <JewelText />
      <ClothesText />
      <PawnText />
      <LateText />
      <AppointText />



    </div>
  );
}


export default Policy;
