import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config.js";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  
  const LoginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        console.log("login ker raha hon...");
        
        // Signed in
        const user = userCredential.user;

        console.log("user milaa -->",user);

        if(user){
          navigate("/")
        }
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Error milaa -->", errorCode, errorMessage);
        
      });
  };
  return (
    <div>
      <h1>Login Page</h1>

      console.log("hellow");
      

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

        <button onClick={LoginHandler}>Login</button>

        <br />

        <Link to="/signup">
          <button>Go to signup page</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
