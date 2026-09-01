import React, { useContext } from 'react'
import userContext from '../context/UserContext'
import ThemeContext from '../context/ThemeContext';

const User = () => {
    const data  = useContext(userContext);
    const [theme]  = useContext(ThemeContext);

    console.log(theme);
    
  return (
    <div>This is a User Info Page</div>
  )
}

export default User