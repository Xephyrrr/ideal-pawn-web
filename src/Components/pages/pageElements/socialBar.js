import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function SocialPic() {
  return (
    <div className="socialWrap">


      <div className="social">
      <SocialMediaIconsReact

      icon="facebook" iconColor="rgba(255,255,255,1)"
      backgroundColor="rgba(10,32,21,0)"
      iconSize="2"
      url="https://www.facebook.com/idealpawnandjewelry/"
      size="39" />

      <div className="social">
      <SocialMediaIconsReact
      icon="yelp"  iconColor="rgba(255,255,255,1)"
      backgroundColor="rgba(10,32,21,0)"
      iconSize="2"
      url="https://www.facebook.com/idealpawnandjewelry/"
      size="39" />

      <div className="social">
      <SocialMediaIconsReact
      icon="instagram"  iconColor="rgba(255,255,255,1)"
      backgroundColor="rgba(10,32,21,0)"
      iconSize="2"
      url="https://www.facebook.com/idealpawnandjewelry/"
      size="39" />


        </div>
       </div>
      </div>
    </div>




  )

}
export default SocialPic;
