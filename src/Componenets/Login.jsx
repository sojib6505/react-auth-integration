import { use, useRef, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { login,forget } = use(AuthContext)
    const navigate = useNavigate()
    const emailRef = useRef()
    const location = useLocation()
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
         
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
          setError('')
        login(email, password).then((user) => {
            const loggedUser = user.user.emailVerified
            if(!loggedUser){
                alert('Your email is not verified. Please verify your email before login.')
                  navigate('/')
            }else{
                 alert('Login Successful')
                  navigate(location?.state|| '/')
            }
        }).catch((error) => {
            setError(error.message)
        })
        
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        forget(email).then(()=>{
            
        }).catch((error) => {
            setError(error.message)
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
                                <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                                    <button className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </button>
                                </div>
                                <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Have no account? <Link to='/signUp' className='text-blue-600 hover: underline' >SignUp</Link> </p>
                                {error && <p>{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
