import React, { Component } from 'react';
import LoanText from './pageElements/loanText';
import LoanImg from './pageElements/loanImg';
import LoanFeesa from './pageElements/feesTexta';
import LoanFeesb from './pageElements/feesTextb';
import LoanMargin from './pageElements/loanMargin'
import LoanBottom from './pageElements/loanBottom';
import { motion } from 'framer-motion';

const transition={duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96]}

const variants={
  exit: { y: 0, opacity: 0, transition: { transition } },
  enter: { y: 0, opacity: 1, transition: {delay:0.3, ...transition } }
};


class LoanPage extends Component{

  render(){
    return(
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.div variants={variants}>
        <div className="loan-grid">
          <LoanImg />
          <LoanText />
          <LoanMargin />
          <LoanFeesa />
          <LoanFeesb />
          <LoanBottom />
        </div>
        </motion.div>
      </motion.div>

    );
  }
}
export default LoanPage;
