import React from 'react';
import {Link} from 'react-scroll';

function Header2() {
  return (
    <div className="headerTwo">
      <Link
          activeClass="active"
          to="guns"
          spy={true}
          smooth={true}
          offset = {-70}
          duration= {500}
      >GUNS</Link>
        <Link
          activeClass="active"
          to="jewelry"
          spy={true}
          smooth={true}
          offset = {-70}
          duration= {500}
          >JEWELRY</Link>
              <Link
                  activeClass="active"
                  to="clothing"
                  spy={true}
                  smooth={true}
                  offset = {-70}
                  duration= {500}
              >CLOTHING</Link>
                <Link
                    activeClass="active"
                    to="pawn"
                    spy={true}
                    smooth={true}
                    offset = {-70}
                    duration= {500}
                >PAWN</Link>
                  <Link
                      activeClass="active"
                      to="late payment"
                      spy={true}
                      smooth={true}
                      offset = {-70}
                      duration= {500}
                  >LATE PAYMENT</Link>
                    <Link
                        activeClass="active"
                        to="appointment"
                        spy={true}
                        smooth={true}
                        offset = {-70}
                        duration= {500}
                    >APPOINTMENTS</Link>

    </div>
  );
}

export default Header2;
