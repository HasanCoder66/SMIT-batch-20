import React, { createContext } from 'react'


const userData ={
    name:"hasan",
    email :"codermhasan@gmail.com"
}

// step 1
const userContext = createContext();



const UserProvider = ({children}) => {
    return (
        <userContext.Provider value={userData}>
            {children}
        </userContext.Provider>
    )
}



export {UserProvider}
export default userContext