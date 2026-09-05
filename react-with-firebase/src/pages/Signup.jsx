import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc } from "firebase/firestore";
import app, { db } from "../firebase/config.js";
const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  const signupHandler = async () => {
    // console.log("signup ker raha hon..");

    try {
      let { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(user);

      if (user) {
        try {
          const docRef = await addDoc(collection(db, "users"), {
           email : email,
            password,
            age,
            username
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

      console.log("user created!");
    } catch (error) {
      const { code, message } = error;
      console.log(code);
      console.log(message);
    }

    // console.log(email, password);

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     console.log("user crediential",userCredential);

    //     const user = userCredential.user;
    //     // ...

    //     console.log(user);

    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     console.log(errorCode, errorMessage);

    //     // ..
    //   });
  };
  return (
    <div>
      <h1>Signup Page</h1>

      <div>
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

        <button onClick={signupHandler}>Signup</button>

        <br />

        <Link to="/login">
          <button>Go to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
