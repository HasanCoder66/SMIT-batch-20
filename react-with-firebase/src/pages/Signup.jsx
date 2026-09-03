import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config.js";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = () => {
    // console.log("signup ker raha hon..");

    // console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log("user crediential",userCredential);
        
        const user = userCredential.user;
        // ...

        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
        
        // ..
      });
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
