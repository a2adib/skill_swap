/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

 

const AuthProvider = ({children}) => {

    const registerWithEmailPassword = (email, pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const authData = {
        registerWithEmailPassword,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;