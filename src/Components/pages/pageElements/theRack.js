import React from 'react';
import Image from 'react-bootstrap/image';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';



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
    <div className="rack_wrap_img">
      <Tilt className="Tilt" options={{ max : 25, scale: 1.05 }}>
        <Image src="/images/r2.png" rounded />
      </Tilt>
      <Tilt className="Tilt" options={{ max : 25, scale: 1.05 }}>
        <Image src="/images/r3.png" rounded />
      </Tilt>
      <Tilt className="Tilt" options={{ max : 25, scale: 1.05 }}>
        <Image src="/images/r4.png" rounded />
      </Tilt>
    </div>


      <div className="rack_wrap_img">
        <Tilt className="Tilt" options={{ max : 25, scale: 1.05 }} >
          <Image src="/images/r2.png" rounded />
        </Tilt>
        <Tilt className="Tilt" options={{ max : 25, scale: 1.05 }}>
          <Image src="/images/r3.png" rounded />
        </Tilt>
        <Tilt className="Tilt" options={{ max : 25, scale: 1.05 }}>
          <Image src="/images/r4.png" rounded />
        </Tilt>
      </div>




  </div>
</div>
  );
}

export default TheRack;
