import React from "react"
import "./HomePage.css"
import logo from "../assets/logo.png"
import Me from "../assets/blackandwhite1A.png"
import "react-calendar/dist/Calendar.css"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="left-section">
        {/* <img src={Me} alt="Your Image" className="background-image" /> */}
      </div>
      <div className="right-section">
        <div className="logo homepage-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sign-in">
          <h2>Welcome to For The Win Basketball Training</h2>
          <p>Your journey to becoming a better player starts here.</p>
          <Link to="/signup" className="btn">
            Sign Up
          </Link>
          <Link to="/login" className="btn">
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
