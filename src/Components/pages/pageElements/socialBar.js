import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function SocialPic() {
  return (
    <div className="socialWrap">


      <div className="social">
        <a href=''><h1>@idealpawnandjewelry</h1></a>

        <SocialMediaIconsReact

        icon="facebook" iconColor="rgba(255,255,255,1)"
        backgroundColor="rgba(10,32,21,0)"
        iconSize="2"
        url="https://www.facebook.com/idealpawnandjewelry/"
        size="39" />
      </div>
      <div className="social">
        <h1>Check out some reviews!</h1>
        <SocialMediaIconsReact
        icon="yelp"  iconColor="rgba(255,255,255,1)"
        backgroundColor="rgba(10,32,21,0)"
        iconSize="2"
        url="https://www.yelp.com/biz/ideal-pawn-and-jewelry-doraville"
        size="39" />
     </div>
      <div className="social">
        <h1>idealpawn</h1>
        <SocialMediaIconsReact
        icon="instagram"  iconColor="rgba(255,255,255,1)"
        backgroundColor="rgba(10,32,21,0)"
        iconSize="2"
        url="https://www.instagram.com/idealpawn/"
        size="39" />
      </div>

    </div>




  )

}
export default SocialPic;
