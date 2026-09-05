import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
import { db } from "../firebase/config.js";

const EditUserModal = ({ setIsEditUser, editUserData }) => {
  // console.log(editUserData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (editUserData) {
      setEmail(editUserData.email || "");
      setPassword(editUserData.password || "");
      setAge(editUserData.age || "");
      setUsername(editUserData.username || "");
    }
  }, [editUserData]);

  const updateUser = async (id) => {
    try {
      await setDoc(doc(db, "users", id), {
        email,
        password,
        age,
        username,
      });

      setIsEditUser(false)

      console.log("user updated successfully");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#2a2a2a",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Enter your Age"
        />
        <br />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your username"
        />

        <button onClick={() => updateUser(editUserData.id)}>update user</button>
        <button onClick={() => setIsEditUser(false)}>Close</button>
        <br />
      </div>
    </div>
  );
};

export default EditUserModal;
