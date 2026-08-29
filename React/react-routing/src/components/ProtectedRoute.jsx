import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
 
    let isAuhtnticated = true;

    if(!isAuhtnticated){
        return <Navigate to={"/login"} />
    }

    return children
}

export default ProtectedRoute