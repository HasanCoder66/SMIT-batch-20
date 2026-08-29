import React from 'react'
import Navbar from '../components/Navbar'
import { Navigate } from 'react-router-dom';

const Login = () => {

  let isLoggedInUser = JSON.parse(localStorage.getItem("token"));

  if(isLoggedInUser){
    return <Navigate to="/" />
  }
  return (
    <div>
           <Navbar />
      This is a login page
    </div>
  )
}

export default Login
