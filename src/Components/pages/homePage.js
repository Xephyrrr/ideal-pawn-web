import React from 'react';
import MainSlider from './pageElements/mainSlider';
import SellBtns from './pageElements/sellBtns';
import SellInfo from './pageElements/sellInfo';
import IdealPromise from './pageElements/idealPromise';
import MapMain from './pageElements/mapMain';
import TheRack from './pageElements/theRack';
import CanDo from './pageElements/canDo';
import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';

const transition={duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96]}

const variants={
  exit: { y: 50, opacity: 0, transition: { transition } },
  enter: { y: 0, opacity: 1, transition: {delay:0.3, ...transition } }
};

function HomePage() {
  return (
    <motion.div initial="exit" animate="enter" exit="exit"
      style={{
        overflow: 'hidden'
      }}
      >
      <motion.div variants={ variants }>
        <MainSlider />
        <div className="home-grid">
        <IdealPromise />
        <CanDo />
        <SellInfo />
        <SellBtns />
        <TheRack />
        <MapMain />
        </div>
      </motion.div>
  </motion.div>
  );
}

export default HomePage;
