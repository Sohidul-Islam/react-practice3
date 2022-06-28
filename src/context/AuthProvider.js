import React, { createContext } from 'react';
import Usefirebase from '../Hooks/Usefirebase';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    // const { children } = props;
    const allContext = Usefirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;