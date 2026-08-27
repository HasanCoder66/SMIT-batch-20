import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/about"}><li>Aboout</li></Link>
        <Link to={"/login"}><li>Login</li></Link>
  
    </ul>
  )
}

export default Navbar
