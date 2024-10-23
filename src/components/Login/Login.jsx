import React, { useState ,useRef} from 'react'
import "./Login.css"
import {formValidation} from "../../utils/formValidation"

const Login = () => {

    const [isSignIn,setIsSignIn]=useState(true);

    const handleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }

    const email=useRef(null);
    const password=useRef(null);

    const handleSubmit=()=>{

        const validationData=formValidation(email.current.value,password.current.value);
        console.log(validationData);
        setErrorMessage(validationData);
    } 

    const [errorMessage,setErrorMessage]=useState(null);

  return (
    <div className="login">
        <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
            <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
            {!isSignIn &&<input type="text" placeholder="Full Name"></input>}
            <input type="text"  ref={email}placeholder="Email Address"></input>
            <input type="text"  ref={password}placeholder='Password'></input>
            {errorMessage!=null ? <p className="is-valid">{errorMessage}</p> :null}
            <button onClick={handleSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <h5 onClick={handleSignIn}>{isSignIn ? "New to Netflix? Sign up now." : "Already have Account? Sign in now."}</h5>

        </form>
    </div>
  )
}

export default Login