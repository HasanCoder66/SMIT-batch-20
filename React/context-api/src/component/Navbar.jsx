import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import userContext from '../context/UserContext';



const Navbar = () => {

   const [theme, toggleTheme] =  useContext(ThemeContext);
   const data  = useContext(userContext);

    console.log(data);
   
  return (
   

    //  <div className={`p-3 ${theme == "light" ? `text-black bg-gray-200` : `bg-black text-white`}`}>
     <div className={`p-3  dark:bg-black dark:text-white bg-gray-500`}>
        <div>Navbar</div>
        <button onClick={toggleTheme}>Theme : {theme}</button>
    </div>
   
  )
}

export default Navbar