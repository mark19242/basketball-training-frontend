import React, { useState, useEffect } from "react"
import { getUsers, createUser } from "../services/api"

const Users = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    createUser({ name, email }).then((response) => {
      setUsers([...users, response.data])
      setName("")
      setEmail("")
    })
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default Users
