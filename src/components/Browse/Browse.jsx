import React from 'react'
import "./Browse.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../redux/userSlice'


const Browse = () => {

  const dispatch=useDispatch();

  const navigate=useNavigate();
  return (
    <div>
      <button className="btn" onClick={()=>{

        dispatch(removeUser());
        navigate("/")


      }}>(SIGN OUT)</button>
    </div>
  )
}

export default Browse