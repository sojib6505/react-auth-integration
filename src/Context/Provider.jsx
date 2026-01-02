import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import AuthContext from "./AuthContext";


export default function Provider({ children }) {
  const signUp = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email , password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userInfo = {
    signUp,
    login
  }

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  )
}
