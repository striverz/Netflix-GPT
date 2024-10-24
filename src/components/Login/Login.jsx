import React, { useState ,useRef} from 'react'
import "./Login.css"
import {formValidation} from "../../utils/formValidation"
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from "../../utils/firebase"
import { IMG_AVATAR } from '../../utils/consts';
import { useDispatch } from 'react-redux';
import {addUser} from "../../redux/userSlice"
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [isSignIn,setIsSignIn]=useState(true);

    const handleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    const handleSubmit=()=>{

        const message=formValidation(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message!=null) return;

        
        if(!isSignIn){
           
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                
                const user = userCredential.user;
                
                //updatiing the user
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: IMG_AVATAR,
                  }).then(() => {
                    
                    const {uid,email,displayName,photoURL}=auth.currentUser;
                    

                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    navigate("/browse");

                    

                    

                    
                  }).catch((error) => {
                    
                  });
                
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
                navigate("/browse");
                
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
            {!isSignIn &&<input type="text" placeholder="Full Name" ref={name}></input>}
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