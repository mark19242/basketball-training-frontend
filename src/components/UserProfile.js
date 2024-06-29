// src/components/UserProfile.js
import React, { useState, useEffect } from "react"
import "./UserProfile.css"
import logo from "../assets/logo.png"
import axiosInstance from "../axiosInstance"

const UserProfile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:3000/profile"
        )
        setUser(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="profile-page-container">
      <div className="profile-left-section"></div>
      <div className="profile-right-section">
        <div className="profile-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="user-profile">
          <h2>User Profile</h2>
          {user && (
            <div>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
