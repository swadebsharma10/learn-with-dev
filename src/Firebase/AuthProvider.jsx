import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create User
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login User
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const logOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // update user

    const updateUser =(displayName, photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName: displayName,
            photoURL: photoURL
        })
    }


    // observer

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer', currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        updateUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;