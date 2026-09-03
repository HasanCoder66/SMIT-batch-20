import React from 'react'

import { getAuth, signOut } from 'firebase/auth'
import app from '../firebase/config'

const auth = getAuth()

const Home = () => {

  const logoutHandler = () => {
    signOut(auth)
  }
  return (
    <div>This is a Main Page

      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Home