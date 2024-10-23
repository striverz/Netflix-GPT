import React, { useState ,useRef} from 'react'
import "./Login.css"
import {formValidation} from "../../utils/formValidation"
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../utils/firebase"

const Login = () => {

    const [isSignIn,setIsSignIn]=useState(true);

    const handleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }

    const email=useRef(null);
    const password=useRef(null);

    const handleSubmit=()=>{

        const message=formValidation(email.current.value,password.current.value);
        console.log(message);
        setErrorMessage(message);
        if(message!=null) return;

        
        if(!isSignIn){
           
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                
                const user = userCredential.user;
                console.log(user)
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                
            });
        }
        else{
            
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });

        }

   
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