/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut } from "firebase/auth";
import app from '../config/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  //google sign in
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
  }

  // sign out user
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  // observer
  useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false);

        // if user exists then issue a token
        if (currentUser) {
          axios.post('https://jobearth-server.vercel.app/jwt', loggedUser, { withCredentials: true })
          .then(res => {
              console.log('token response', res.data);
          })
        }
        else {
          axios.post('https://jobearth-server.vercel.app/signout', loggedUser, { withCredentials: true })
          .then(res => {
              console.log(res.data);
          })
        }
     });
      return () => {
        unSubscribe()
      }
  }, [])

  const authInfo = {user, loading, googleSignIn, createUser, signInUser, handleUpdateProfile, signOutUser}
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
