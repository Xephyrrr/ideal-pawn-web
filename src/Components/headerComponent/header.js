import React from 'react';
import {
  NavLink
} from "react-router-dom";
import AccBtn from '../pages/pageElements/accComp';

class Header extends React.Component{

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceScrolled = window.pageYlimit || document.documentElement.scrollTop;
    const limit = 210;
    const header = document.getElementById("header");

    if (distanceScrolled >= limit) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  }
  render(){
  return (
    <header id="header">

        <nav>
          <ul>
            <li>
              <NavLink to="./" activeClassName="active">
              HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName="active">
              ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to=""activeClassName="active">
              SERVICES
              </NavLink>
              <div class="dropdown-content">
                <NavLink to="/Loans" activeClassName="active">
                 Get A Loan
                </NavLink>
                <NavLink to="/Firearms" activeClassName="active">
                  Firearms
                </NavLink>

                <NavLink to="/Sell" activeClassName="active">
                  Sell Your Stuff
                </NavLink>



              </div>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <NavLink to="./" activeClassName="active">
            Ideal Pawn & Jewelry
          </NavLink>
        </div>

        <div>

          <AccBtn />
        </div>



    </header>
  );
}
}

export default Header;
