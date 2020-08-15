import React, { Component } from 'react';




class Insta extends Component {



render(){
  const options = {
    accessToken: 'access...',
    clientId: 'client...',
    get: 'user', // popular, user
    locationId: null,
    resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
    sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    tagName: null,
    userId: 123,
  }



  return(
    <div className="insta_wrap">



    </div>
  );
}

}

export default Insta;
