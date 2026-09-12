import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

//   const getUserData = async () => {
//     try {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/auth.user
//           const uid = user.uid;
//           setExistUser(user);

//           //   console.log(user);

//           // ...
//         } else {
//           // User is signed out
//           // ...

//           console.log("user nhii haii..");
//           setExistUser(null);
//         }

//         setLoading(false);

//        if(existUser){
//         console.log("jani user milgaya..");
        
//        }else {
//         console.log("user nhi hai..");
        
//        }
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };



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

    return () => getUser();
  }, []);

  if (loading) {
    return <p>user araha haii...</p>;
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
