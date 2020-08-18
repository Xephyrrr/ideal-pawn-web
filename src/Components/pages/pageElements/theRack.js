import React from 'react';

import Insta from '../../InstagramData/insta';



const TheRack = () => {
  const spring = {
  type: "spring",
  damping: 40,
  stiffness: 100
}
  return(
<div className="rack_wrap">

  <div className="rack_header"> What's New On The Rack</div>
  <div className="rack_subText">We post some of our rarest high value items on our social check them out!</div>
    <div className="rack_feed">
        <Insta />
    </div>
</div>
  );
}

export default TheRack;
