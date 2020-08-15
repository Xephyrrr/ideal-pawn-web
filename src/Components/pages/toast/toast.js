import React ,{ useState } from 'react';
import Logo from '../../../ideal.svg';
import Announcement from 'react-announcement';


const NewToast = () => {

return(


  <Announcement
           title="We are back for business!"
           subtitle="We are currently taking social distancing very serious as well as disenfecting the store floor throughout the day. You can feel safe when coming back to your favorite local pawn shop. We can't wait to see you again."
           link="https://github.com/kristofferandreasen/react-announcement"
           imageSource={Logo}
           daysToLive={0}
          secondsBeforeBannerShows={1}




       />


     );
}

export default NewToast;
