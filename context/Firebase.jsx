"use client";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDt_E8y6eV2pJGhHYgAStmHcoBhQ4w2LXk",
  authDomain: "book-exchange-34314.firebaseapp.com",
  projectId: "book-exchange-34314",
  storageBucket: "book-exchange-34314.appspot.com",
  messagingSenderId: "784965721692",
  appId: "1:784965721692:web:b25c0ec7edf5fa77095099",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider()
export const FirebaseProvider = ({ children }) => {
    const signInWithGoogle = async () => {
        signInWithPopup(firebaseAuth,googleProvider)
    }
    const user = firebaseAuth.currentUser
    
  return <FirebaseContext.Provider value={{ signInWithGoogle, user }}>{children}</FirebaseContext.Provider>;
};

export const useFirebase = () => useContext(FirebaseContext)