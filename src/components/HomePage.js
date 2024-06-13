import React from "react"
import "./HomePage.css"
import logo from "../assets/logo.png"
import Users from "./Users"
import Me from "../assets/blackandwhite1.png"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="left-section">
        <img src={Me} alt="Your Image" className="background-image" />
      </div>
      <div className="right-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sign-in">
          <h2>Sign In</h2>
          {/* Add your sign-in form here */}
        </div>
        <Users />
        {/* Add your calendar and schedule here */}
      </div>
    </div>
  )
}

export default HomePage
