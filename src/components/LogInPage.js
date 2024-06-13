// src/components/LogInPage.js
import React, { useState } from "react"
import axios from "axios"

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
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login-page">
      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LogInPage
