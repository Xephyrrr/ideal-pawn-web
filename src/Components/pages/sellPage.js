import React from 'react';
import SellStuffTxt from './pageElements/sellStuffTxt';
import SellStuffImg from './pageElements/sellStuffImg';
import SellPageBanner from './pageElements/sellBanner';
import HotItems from './pageElements/hotItems';
import { motion } from 'framer-motion';

const transition={duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96]}

const variants={
  exit: { y: 0, opacity: 0, transition: { transition } },
  enter: { y: 0, opacity: 1, transition: {delay:0.3, ...transition } }
};


function SellPage() {
  return(
    <motion.div initial='exit' animate='enter' exit='exit'>
      <motion.div variants={variants}>
      <div className="sell-grid">
        <SellStuffImg />
        <SellStuffTxt />
        <SellPageBanner />
        <HotItems />
        </div>
      </motion.div>
    </motion.div>



  );

}

export default SellPage;
