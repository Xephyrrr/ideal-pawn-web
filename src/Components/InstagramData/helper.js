import axios from 'axios';

const getInstaFeed = async (id, limit) =>{
  const url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"${id}","first":${limit}}`;
  try{
    const response = await axios.get(url);
    return response;
  }catch(error){
      return error;
  }


};

export { getInstaFeed };
