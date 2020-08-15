import React from 'react';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/pages/homePage';
import Policy from './Components/pages/policiesPage';
import Appointments from './Components/pages/appAvailpage';
import SideBar from './Components/sideBarComponent/sideBar';
import SideBar2 from './Components/sideBarComponent/sideBar2';
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './Assets/css/default.min.css'
import ScrollToTop from './Components/scrollTop';
import Register from './Components/pages/regPage';
import NewToast from './Components/pages/toast/toast';
import LoanPage from './Components/pages/loanPage';
import FirearmsPage from './Components/pages/firearmsPage';
import About from './Components/pages/aboutPage';
import { AnimatePresence } from 'framer-motion';



function App() {
  return (
 <>
    <Router>
      <Route render={({ location }) =>(

      <div className="App">
        <div className="AppContent">

        <Header />
        <SideBar2 />
        <ScrollToTop />
        {/*  <SwitchTransition>
            <CSSTransition
            key={location.key}
            timeout={{enter: 600, exit: 300}}
            classNames='trans'
            unmountOnExit
            >
            */}
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route exact={true} path='/' component={HomePage} />
                  <Route exact={true} path='/policies' component={Policy} />
                  <Route exact={true} path='/about' component={About} />
                  <Route exact={true} path='/appointments' component={Appointments} />
                  <Route exact={true} path='/register' component={Register} />
                  <Route exact={true} path='/loans' component={LoanPage} />
                  <Route exact={true} path='/firearms' component={FirearmsPage} />
                </Switch>

              </AnimatePresence>
            {/*  </CSSTransition>
        </SwitchTransition>
  */}
        <Footer />
        </div>
      </div>
          )}/>
    </Router>
 </>
  );
}

export default App;
