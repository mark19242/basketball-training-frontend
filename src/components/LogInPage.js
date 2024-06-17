// src/components/LoginPage.js
import React, { useState } from "react"
import "./LogInPage.css"
import logo from "../assets/logo.png"
import axios from "axios"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/login", {
        user: { email, password },
      })
      console.log(response.data)
      // Handle successful login, e.g., redirect or store user data
    } catch (error) {
      console.error(error)
      // Handle login error, e.g., show error message
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-content">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
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

export default LoginPage
