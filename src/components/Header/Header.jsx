import React, { useEffect } from 'react'
import "./Header.css"
import {LOGO} from "../../utils/consts"
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../../utils/firebase'
import { addUser } from '../../redux/userSlice'
import avatar from "../../assets/avatar.jpg"
import {  ignOut } from "firebase/auth";


const Header = () => {

  const data=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    
    
   const unsubscribe= onAuthStateChanged(auth, (user) => {
    
      if (user) {
        // console.log("user called");
        
        const {uid,email,password} = user;
        dispatch(addUser({uid:uid,email:email,password:password}));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    
    //unscribed the onAuthStatechanged callback
    return ()=>unsubscribe();
  
  },[]);

  return (
    <div className="header">
            <img src={LOGO} alt="logo" className="logo" />

            {data ? (
                <div className="sign-out" onClick={() => {
                  signOut(auth).then(() => {
                    // Sign-out successful.
                  }).catch((error) => {
                    // An error happened.
                  });

                }}>
                    <img src={avatar} className='avatar' alt="avatar" />
                    
                </div>
            ) : null}
        </div>
  )
}

export default Header