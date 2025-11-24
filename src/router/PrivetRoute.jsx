import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <p>Loading.......</p>
    } 
    if(user){
        return children
    }

    return <Navigate to='/login'/>
    
};

export default PrivetRoute;