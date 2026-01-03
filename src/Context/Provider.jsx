import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";


export default function Provider({ children }) {
  const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const forget = (email) => {
    setLoading(true)
    sendPasswordResetEmail(auth, email)
  }
  useEffect(
    () => {
      const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
       setUser(currentuser)
       setLoading(false)
      })
      return (() => {
        unSubscribe()
      })
    }
    , [])
  const userInfo = {
    user,
    loading,
    signUp,
    login,
    forget
  }

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  )
}
