import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import Login from '../Login/Login'

const Header = () => {
  return (
    <div className="header">
        <nav>
            <img src={logo} className="logo" alt="logo"></img>
        </nav>
        <Login/>
    </div>
  )
}

export default Header