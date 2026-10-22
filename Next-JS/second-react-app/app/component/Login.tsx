"use client"
import React from 'react'

const Login = () => {

    const handlerLogin =() => {
        console.log("login handler chl raha haii");
        
    }


  return (
    <div onClick={handlerLogin}>Login Now</div>
  )
}

export default Login