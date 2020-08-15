import React from 'react';
import SocialPic from '../pages/pageElements/socialBar';

function Footer() {
  return(
    <footer>
    <nav>
      <ul>
        <li>
          <a href="/">Wholesale Info</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/Policies">Policies</a>
        </li>


      </ul>
  </nav>



      <div className="copyright">  ©2020 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> idp&j.com</a>
      </div>
      <SocialPic />


    </footer>
  )

}

export default Footer;
