// src/components/SignUpPage.js
import React, { useState } from "react"
import axios from "axios"
import "./SignUpPage.css"
import logo from "../assets/logo.png"

const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    try {
      const response = await axios.post("http://localhost:3000/users", {
        user: { name, email, password, password_confirmation: confirmPassword },
      })
      console.log(response.data)
      // Handle successful sign-up, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error response:", error.response)
      console.error("Error message:", error.message)
    }
  }

  return (
    <div className="signup-page-container">
      <div className="signup-content">
        <div className="signup-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sign-up-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              required
            />
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
