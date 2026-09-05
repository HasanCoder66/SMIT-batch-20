import React, { useState } from "react";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";
const UserCard = ({ data, setIsEditUser, setEditUserData }) => {
 
  
  const getSingleDoc = async (id) => {
    try {
      const docRef = doc(db, "users", id);

      // 2. Fetch the document snapshot
      const docSnap = await getDoc(docRef);

      // 3. Check if the document exists and read data
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setEditUserData({...docSnap.data(), id : docSnap.id})
        // console.log("Document ID:", docSnap.id);
      } else {
        console.log("No such document found!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = async () => {
    setIsEditUser(true);
    
    getSingleDoc(data.id);
  };

  const deleteHanlder = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));

      console.log("user delete successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div id="info">
        <h1>Username : {data.username}</h1>
        <p>Email : {data.email}</p>
        <p>Age : {data.age}</p>
      </div>

      <div id="action">
        <button onClick={editHandler}>Edit</button>
        <button onClick={() => deleteHanlder(data.id)}>delete</button>
      </div>
    </div>
  );
};

export default UserCard;
