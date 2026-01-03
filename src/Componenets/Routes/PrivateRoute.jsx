import { use, useState } from "react"
import AuthContext from "../../Context/AuthContext"
import { Navigate, useLocation } from "react-router"


export default function PrivateRoute({children}) {
    const location = useLocation()
    console.log(location);
    const {user,loading} = use(AuthContext)
    if(loading){
        return <span className="loading loading-bars mx-auto loading-xl"></span>
    }
   
    if(!user){
        return <Navigate  state={location?.pathname} to='/login'></Navigate>
    }
  return (
   children
  )
}
