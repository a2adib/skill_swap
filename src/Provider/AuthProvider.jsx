/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

 

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registerWithEmailPassword = (email, pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const authData = {
        registerWithEmailPassword,
        setUser,
        user
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;