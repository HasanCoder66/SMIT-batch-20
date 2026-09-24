import React, { useEffect } from "react";
import UserCard from "./components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersFailure, getAllUsersSuccess, getAllUserStart } from "./features/users/users";
import axios from "axios";

const App = () => {
  let users = useSelector((state) => state.user.users)
  console.log(users[6]);
  
const dispatch = useDispatch()

  const getUsersData = async () => {
    dispatch(getAllUserStart());

    try {
      const response = await axios.get(`https://auth-be-five.vercel.app/api/user`);

      console.log(response.data.data);
      
        dispatch(getAllUsersSuccess(response.data.data));
    } catch (error) {
      // console.log(error.response.message);

      dispatch(getAllUsersFailure(error.message))
      
    }
  }


  useEffect(() => {
    getUsersData()
  }, [])

  return (
    <div className="bg-[#2a2a2a] h-screen">
      <h1 className="text-white">All Users</h1>

      <div className="flex flex-wrap justify-around">
        {users[6].map((u, idx) => <UserCard key={idx} user={u} />)}

      </div>
    </div>
  );
};

export default App;
