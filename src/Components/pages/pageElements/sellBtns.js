import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import shoppingCart from '../../../Assets/img/shop_cart.svg';
import ebayLogo from '../../../Assets/img/ebay.svg';
import gunBLogo from '../../../Assets/img/gunb.svg';


const variantCart = {
  hover: () => ({
    style:{
      fill: '#565F47',
      transition: 'fill 0.2s ease-in-out',
      webkitTransition: 'fill 0.2s ease-in-out',
    },

  }),
  nohover: () => ({
    style:{
      fill: '#C6B28D',
      transition: 'fill 0.2s ease-in-out',
        webkitTransition: 'fill 0.2s ease-in-out',
    },

  })

};



const greenGold = {
  hover: () => ({
    style:{
      fill: '#565F47',
      transition: 'fill 0.5s ease-in-out',
      webkitTransition: 'fill 0.5s ease-in-out',
    },

  }),
  nohover: () => ({
    style:{
      fill: '#C6B28D',
      transition: 'fill 0.5s ease-in-out',
      webkitTransition: 'fill 0.5s ease-in-out',
    },

  })

};

const white = {
  style: () => ({
    style:{
      fill: '#fff',
      transition: 'fill 0.5s ease-in-out',
      webkitTransition: 'fill 0.5s ease-in-out',
    },


  }),
}

const Goldgreen = {
  hover: () => ({
    style:{
      fill: '#C6B28D',
      transition: 'fill 0.5s ease-in-out',
      webkitTransition: 'fill 0.5s ease-in-out',
    },
    transition: {
        duration: 0.2
    }
  }),
  nohover: () => ({
    style:{
      fill: '#565F47',
      transition: 'fill 0.5s ease-in-out',
      webkitTransition: 'fill 0.5s ease-in-out',
    },
    transition: {
        duration: 0.2

    }
  })

};




class SellBtns extends Component {

  constructor(props){
    super(props);
    this.state = {
      isHover1: true,
      isHover2: true,
      isHover3: true
    };
  }

  togglehover1 = () => {
    this.setState(prevState => ({isHover1:!prevState.isHover1}));
    console.log(this.state.isHover1);

  };

  togglehover2 = () => {
    this.setState(prevState => ({isHover2:!prevState.isHover2}));
    console.log(this.state.isHover2);

  };

  togglehover3 = () => {
    this.setState(prevState => ({isHover3:!prevState.isHover3}));
    console.log(this.state.isHover3);

  };




  render(){
    const { isHover1, isHover2, isHover3 } = this.state;
  return (
    <div className="sellBtnWrap">
      <div className="btns">
        <div className="btn">
          <a href='#map'>
            <AnimatePresence>
              <motion.svg
                style={{width: '16vw', height: 'auto',padding: '20%'}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 489.28 492"
                onMouseEnter={this.togglehover1}
                onMouseLeave={this.togglehover1}
                >

                  <motion.use
                      href={`${shoppingCart}#cart`}
                      initial={!isHover1 ? "nohover" : "hover"}
                      animate={!isHover1 ? "nohover" : "hover"}
                      variants={greenGold}
                      />
                  <motion.use
                      href={`${shoppingCart}#mid`}
                      />

                  <motion.use
                      href={`${shoppingCart}#right`}
                      initial={!isHover1 ? "nohover" : "hover"}
                      animate={!isHover1 ? "nohover" : "hover"}
                      variants={Goldgreen}
                      />
                  <motion.use
                      href={`${shoppingCart}#left`}
                      initial={!isHover1 ? "nohover" : "hover"}
                      animate={!isHover1 ? "nohover" : "hover"}
                      variants={greenGold}
                      />
              </motion.svg>
            </AnimatePresence>
          </a>
          <div className="btnText">
            Stop by our retail location for a look at some of our newest stock.
          </div>
        </div>
        <div className="btn">
          <a href="https://www.ebay.com/str/idealpawnbros" target="_blank">
            <AnimatePresence>
              <motion.svg
                style={{width: '16vw', height: 'auto',padding: '20%'}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 489.28 492"
                onMouseEnter={this.togglehover2}
                onMouseLeave={this.togglehover2}
                >

                  <motion.use
                      href={`${ebayLogo}#ebay`}
                      initial={!isHover2 ? "nohover" : "hover"}
                      animate={!isHover2 ? "nohover" : "hover"}
                      variants={variantCart}
                      />

                  <motion.use
                      href={`${ebayLogo}#right`}
                      initial={!isHover2 ? "nohover" : "hover"}
                      animate={!isHover2 ? "nohover" : "hover"}
                      variants={greenGold}
                      />
                  <motion.use
                      href={`${ebayLogo}#left`}
                      initial={!isHover2 ? "nohover" : "hover"}
                      animate={!isHover2 ? "nohover" : "hover"}
                      variants={Goldgreen}
                      />
              </motion.svg>
            </AnimatePresence>
          </a>
          <div className="btnText">
            Can’t make it in but want to see some of our best items? Check out our eBay store.
          </div>
        </div>
        <div className="btn">
          <a href="https://www.gunbroker.com/All/search?IncludeSellers=2548630" target="_blank">
            <AnimatePresence className='ap'>
              <motion.svg
                style={{width: '16vw', height: 'auto',padding: '20%'}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 489.28 492"
                onMouseEnter={this.togglehover3}
                onMouseLeave={this.togglehover3}
                >

                  <motion.use
                      href={`${gunBLogo}#back`}
                      initial={!isHover3 ? "nohover" : "hover"}
                      animate={!isHover3 ? "nohover" : "hover"}
                      variants={greenGold}
                      />
                  <motion.use
                      href={`${gunBLogo}#white`}
                      initial={!isHover3 ? "style" : "style"}
                      animate={!isHover3 ? "style" : "style"}
                      variants={white}
                      />
                      <motion.use
                          href={`${gunBLogo}#green`}
                          initial={!isHover3 ? "nohover" : "hover"}
                          animate={!isHover3 ? "nohover" : "hover"}
                          variants={greenGold}
                          />

                  <motion.use
                      href={`${gunBLogo}#right`}
                      initial={!isHover3 ? "nohover" : "hover"}
                      animate={!isHover3 ? "nohover" : "hover"}
                      variants={Goldgreen}
                      />
                  <motion.use
                      href={`${gunBLogo}#left`}
                      initial={!isHover3 ? "nohover" : "hover"}
                      animate={!isHover3 ? "nohover" : "hover"}
                      variants={greenGold}
                      />
              </motion.svg>
            </AnimatePresence>
          </a>
          <div className="btnText">
            We keep our gun broker page up to date with whatever firearms we have in stock.
          </div>
        </div>
      </div>
    </div>

    );
  }
    }

    export default SellBtns;
