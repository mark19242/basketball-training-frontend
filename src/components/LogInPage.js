// src/components/LogInPage.js
import React, { useState } from "react"
import axios from "axios"
import "./LogInPage.css"
import logo from "../assets/logo.png"

const LogInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogIn = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/users/sign_in", {
        user: { email, password },
      })
      console.log(response.data)
      // Handle successful log-in, e.g., redirect or store user data
    } catch (error) {
      console.error("Error response:", error.response)
      console.error("Error message:", error.message)
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-content">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="log-in-form">
          <h2>Log In</h2>
          <form onSubmit={handleLogIn}>
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
            <button type="submit" className="btn">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogInPage
