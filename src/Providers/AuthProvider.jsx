import  { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user , setUser] = useState(null)
    
    const createUser = (email , password) => {
        
        return  createUserWithEmailAndPassword(auth , email , password)
    }
    const loginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)

    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const userWithGoogle = () => {
      return  signInWithPopup(auth , googleProvider)
    }
    const userWithGithub = () => {
        return signInWithPopup(auth , githubProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser)
            
        })
        return (()=>{
            unsubscribe()
        })
    },[])
  const authInfo = 
  {
    createUser,
    loginUser,
    logOutUser,
    userWithGoogle,
    userWithGithub,
    user
};

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default AuthProvider;
