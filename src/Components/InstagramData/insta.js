import React, { useState, useEffect } from 'react';
import { getInstaFeed } from './helper';
import Image from 'react-bootstrap/image';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';



const Insta = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    const accountId = 7770519165;
    const postsLimit = 6;

    const fetchData = async () => {
      const response = await getInstaFeed(accountId, postsLimit);
      if(response.status === 200) {
        const postRes = response.data.data.user.edge_owner_to_timeline_media.edges;
        setPosts(postRes);
      }
    };

    fetchData();
  }, []);


  return(
    <div className="rack_wrap_img">

    {posts.map((postItem) => {
        const image = postItem.node.thumbnail_resources[4].src;
        const url = postItem.node.shortcode;
        return(
          <a  onClick={() => {window.open(`https://www.instagram.com/p/${url}/`,'_blank','width=900,height=900,')}}>
            <Tilt className="Tilt" options={{ max : 25, scale: 1.05 }}>
              <Image src={image} rounded />
            </Tilt>
          </a>
        );
      })}

    </div>
  );

};



export default Insta;
