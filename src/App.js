// src/App.js
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import SignUpPage from "./components/SignUpPage"
import LogInPage from "./components/LogInPage"
import UserProfile from "./components/UserProfile"
import TrainingSchedule from "./components/TrainingSchedule"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/schedule" element={<TrainingSchedule />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
