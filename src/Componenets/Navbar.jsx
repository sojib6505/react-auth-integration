
import { use } from "react"
import { Link, NavLink, useLocation } from "react-router"
import AuthContext from "../Context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../firebase.init"



export default function Navbar() {
       const {user} = use(AuthContext)
       const location = useLocation()
    const links = <>
         <NavLink to="/">Home</NavLink>
         <NavLink className="ml-2"  to="/signup">SignUp</NavLink> 
         <NavLink className="ml-2" to="/login">Login</NavLink> 
         <NavLink className="ml-2" to="/dashboard">Dashboard</NavLink>
         {
            user && 
           <>
            <NavLink className="ml-2" to="/order">Order</NavLink> 
             <NavLink className="ml-2" to="/profile">Profile</NavLink> 
           </>
            
         }
    </>
 
    
    const handleSignOut = () => {
        signOut(auth).then(()=>{

        }).catch((error)=>{
            console.log(error)
        })
    }
   
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>{user? <p>{user.email}</p> : ''}</div>
                 {user?    <a className="btn" onClick={handleSignOut}>Sign Out</a> : <Link to='/login' className="btn">SignIn</Link>  }
                </div>
            </div>
        </div>
    )
}
