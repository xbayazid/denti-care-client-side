import React, {createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const providerLogin = (provider) =>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password, name,) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password, name)
    }

    const signIn = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoader(true);
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoader(false);
        })

        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo ={user, providerLogin, logOut, createUser, signIn, loader};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;