import { use, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { FaEye,FaEyeSlash } from "react-icons/fa";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const {login} = use(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        login(email,password).then((user)=>{
            console.log(user)

            alert('Login Successful')
            navigate('/')
        }).catch((error)=> {
            console,log(error) 
        })  
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                     <input type={showPassword?'text':'password'} name="password" className="input" placeholder="Password" />
                                     <button className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                     </button>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Have no account? <Link to='/signUp' className='text-blue-600 hover: underline' >SignUp</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
