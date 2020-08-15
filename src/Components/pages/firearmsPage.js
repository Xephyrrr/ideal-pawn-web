import React, { Component } from 'react';
import FaText from './pageElements/faText';
import FaImg from './pageElements/faImg';
import FaImgTxt from './pageElements/faImgTxt';
import SafetyTxt from './pageElements/safetyText';
import SafetyImg from './pageElements/safetyImg';
import FaTextTwo from './pageElements/faTextTwo';
import FaTxtBottomLinks from './pageElements/faTxtBottomLinks';
import Scroll from './pageElements/scrollAnim';
import { motion } from 'framer-motion';
import FaMargin from './pageElements/faMargin';
import FaTxtImg from './pageElements/faTxtImg';
import FaTxtBottomInfo from './pageElements/faTxtBottomInfo'

const transition={duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96]};

const variants={
  exit: { y: 0, opacity: 0, transition: { transition } },
  enter: { y: 0, opacity: 1, transition: {delay:0.3, ...transition } }
};



function FirearmsPage() {

  return (
      <motion.div initial='exit' animate='enter' exit='exit'>
          <motion.div variants={variants}>
            <div className="arms-grid">
              <FaImg />
              <FaText />
              <FaMargin />
              <FaImgTxt />
              <FaTxtImg />
              <SafetyImg />
              <SafetyTxt />
              <FaTextTwo />
              <FaTxtBottomLinks />
              <FaTxtBottomInfo />
            </div>
          </motion.div>
      </motion.div>

    );
  }
export default FirearmsPage;
