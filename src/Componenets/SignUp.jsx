import { use, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.init";

export default function SignUp() {

    const [showPassword, setShowPassword] = useState(false)
    const { signUp } = use(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        signUp(email, password).then((user) => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert('Verification Email Sent. Please check your inbox.')
                    console.log(user.user.
                        emailVerified
                    )
                })
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="fieldset">
                                <label className="label">Your Name</label>
                                <input type="text" name="name" className="input" placeholder="Full Name" />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-4 right-2">
                                        {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                    </button>

                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignUp</button>
                                <p>Already have an account? <Link to='/login' className="text-blue-600 hover:underline">Login</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
