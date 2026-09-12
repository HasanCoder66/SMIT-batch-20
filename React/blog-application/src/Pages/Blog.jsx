import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const Blog = () => {
  const [user, setUser] = useState(null)

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
          // ...
        }
      });
    };

    console.log(user);
    


    useEffect( () => {
      getUser()
    }, []) 
  return (

    <Navbar user={user}  />
    
  )
}

export default Blog