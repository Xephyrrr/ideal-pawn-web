import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { motion } from 'framer-motion';
import Directions from '../pages/pageElements/mapSmall';



const COLLAPSED_WIDTH = "1vw";
const EXPANDED_WIDTH = "40vw";
const SidebarVariants = {
  expanded: () => ({
    width: EXPANDED_WIDTH,
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
        duration: 0.2
    }
  }),
  collapsed: () => ({
    width: COLLAPSED_WIDTH,
    transition: {
      type: "spring",
        damping: 15,
        stiffness: 150,
        delay: 0.3,
        duration: 0.2

    }
  })
};


const InnerSidebarVariants = {
  expanded: () => ({
    opacity: 1,

    transition: {
       delay: 0.3,


    }
  }),
  collapsed: () => ({
    opacity: 0,
    transition: {

    }
  })
};


class SideBar2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      sidebarCollapsed: true
    };
  }


  togglebox = () => {
    this.setState(prevState => ({ sidebarCollapsed: !prevState.sidebarCollapsed }));
    console.log(this.state.sidebarCollapsed);
  };



  render(){
    const { sidebarCollapsed } = this.state;
  return(
      <>
        <div className='side_ext_wrap'>

          <motion.div className='side_ext'
            initial={sidebarCollapsed ? "collapsed" : "expanded"}
            animate={sidebarCollapsed ? "collapsed" : "expanded"}
            variants={SidebarVariants}


            >
            <motion.div className='side_inner_wrap'
              initial={sidebarCollapsed ? "collapsed" : "expanded"}
              animate={sidebarCollapsed ? "collapsed" : "expanded"}
              variants={InnerSidebarVariants}
              >
              <div className='side-socials'>
                <a href='https://www.yelp.com/biz/ideal-pawn-and-jewelry-doraville' target='_Blank'><img src='/images/icons/y.png' /></a>
                <a href='https://www.instagram.com/idealpawn/' target='_Blank'><img src='/images/icons/in.png' /></a>
                <a href='https://www.facebook.com/idealpawnandjewelry/' target='_Blank'><img src='/images/icons/f.png' /></a>
              </div>
              <div className='side_contents'>
                <div className='side_contact'>
                  <div style={{fontSize:22}}>Call Us</div>
                  <div style={{fontSize:15}}>+1 770 493 1986</div>
                </div>
                <div className='side_email'>
                  <div style={{fontSize:22}}>Email Us</div>
                  <div style={{fontSize:15}}>inquire@idealpawn.com</div>
                </div>
                <div className='side_map_container'>
                  <div style={{
                      fontSize:22,
                      marginTop:-20,


                    }}>Find Us</div>
                  <div style={{
                      fontSize:15,
                      marginBottom:10,
                      minWidth: '500px',
                      fontFamily: 'tiemposSB'
                    }}>On the left side of Northcrest Rd near Spaghetti Junctinon and I-85</div>
                  <div className='side_map_main'>
                  <Directions />
                  </div>
                </div>
              </div>

            </motion.div>

          </motion.div>

        </div>

          <div className='side-bar-wrap'onClick={this.togglebox} >

            <div className='bar' >
              <motion.div className="bar_text" whileHover={{scale: 1.1}}>
                HOW TO FIND US
              </motion.div>

            </div>
          </div>
      </>
  );
}
}

export default SideBar2;
