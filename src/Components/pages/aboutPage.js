import React from 'react';
import AboutHead from './pageElements/aboutHead';
import AboutInfo from './pageElements/aboutInfo';
import OurFamily from './pageElements/ourFamily';
import AboutQuote from './pageElements/aboutQuote';
import { motion } from 'framer-motion';

const transition={duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96]};

const variants={
  exit: { y: 0, opacity: 0, transition: { transition } },
  enter: { y: 0, opacity: 1, transition: {delay:0.3, ...transition } }
};


function About() {

  return (
    <motion.div initial='exit' animate='enter' exit='exit'>
      <motion.div variants={variants}>
      <div className='about-grid'>
        <AboutHead />
        <AboutInfo />
        <OurFamily />
        <AboutQuote />
      </div>
      </motion.div>
    </motion.div>

  );
}

export default About;
