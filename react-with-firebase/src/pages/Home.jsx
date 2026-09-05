import React, { useEffect, useState } from "react";
import { collection, getDocs, setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import app, { db } from "../firebase/config";
import UserCard from "../component/UserCard";
import EditUserModal from "../component/EditUserModal";

const auth = getAuth();

const Home = () => {

  const [isEditUser, setIsEditUser] = useState(false)
  const [allUsers, setAllUsers] = useState([]);
  const [editUserData, setEditUserData] = useState({});

  const getUsersData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let users = querySnapshot.docs.map((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);

        return {
          id: doc.id,
          ...doc.data(),
        };

        // setAllUsers((prev) => [...prev, doc.data()]);
      });

      setAllUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const logoutHandler = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav>
        This is a Main Page
        <button onClick={logoutHandler}>Logout</button>
      </nav>

      {/* main area */}

      {/* cards parent */}
      <div>
        {allUsers.length > 0 ? allUsers.map((u) => <UserCard setEditUserData={setEditUserData} setIsEditUser={setIsEditUser} key={u.id} data={u} />) : <p>Loading users</p>}
      </div>

      {isEditUser && <EditUserModal editUserData={editUserData} setIsEditUser={setIsEditUser}  />}
    </div>
  );
};

export default Home;
