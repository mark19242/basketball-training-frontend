import React, { useState, useEffect } from "react"
import axios from "axios"

const UserProfile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile")
        setUser(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile
