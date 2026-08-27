import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({})

  const getData = async () => {
     let result = await axios.get(`https://dummyjson.com/users/${id}`)
    
    
    setUserDetail(result.data);
}


console.log(userDetail);




useEffect(() => {

    
     getData()
    
    }, [])

  console.log(id);

  return <div>this is a user detail page.. {id}
  
  
  <div>{userDetail.age}</div>
  <div>{userDetail.email}</div>
  <div>{userDetail.firstName}</div>
  </div>;
};

export default UserDetailPage;
