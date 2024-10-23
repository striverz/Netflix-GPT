import React, { useState ,useRef} from 'react'
import "./Login.css"

const Login = () => {

    const [isSignIn,setIsSignIn]=useState(true);

    const handleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }

    const email=useRef(null);
    const password=useRef(null);

    const handleSubmit=()=>{
        console.log(email.current.value);
        console.log(password);
    }

  return (
    <div className="login">
        <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
            <h2>{isSignIn ? "Sign In" : "Sign Out"}</h2>
            {!isSignIn &&<input type="text" placeholder="Full Name"></input>}
            <input type="text"  ref={email}placeholder="Email Address"></input>
            <input type="text"  ref={password}placeholder='Password'></input>
            <button onClick={handleSubmit}>{isSignIn ? "Sign In" : "Sign Out"}</button>
            <h5 onClick={handleSignIn}>{isSignIn ? "New to Netflix? Sign up now." : "Already have Account? Sign in now."}</h5>

        </form>
    </div>
  )
}

export default Login