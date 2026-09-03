import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const auth = getAuth();

const ProtectedRoute = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;

        console.log("user", user);
        setUser(user)

        // ...
      } else {

        setUser(null)
        // User is signed out
        // ...
      }

      setLoading(false)
    });
  };

  useEffect(() => {
    getUser();

    return () => getUser()
  }, []);


  if(loading){
    return <h1>Loading...</h1>
  }

  if(user){
console.log("janai user milgaya.. ", user);

return children
    // return <Navigate to="/" />
  }else{
    return <Navigate to={"/login"} />
  }

};

export default ProtectedRoute;
