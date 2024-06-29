// src/components/TrainingSchedule.js
import React, { useState, useEffect } from "react"
import axiosInstance from "../axiosInstance"
import "./TrainingSchedule.css"
import logo from "../assets/logo.png"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const TrainingSchedule = () => {
  const [availableSessions, setAvailableSessions] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axiosInstance.get(
          `/training_sessions?date=${selectedDate.toISOString().split("T")[0]}`
        )
        setAvailableSessions(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSessions()
  }, [selectedDate])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleBooking = async (sessionId) => {
    try {
      const response = await axiosInstance.post("/bookings", {
        booking: { training_session_id: sessionId, user_id: 1 }, // Replace with actual user ID
      })
      console.log(response.data)
      // Update the UI or show a success message
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="schedule-page-container">
      <div className="schedule-content">
        <div className="schedule-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="training-schedule">
          <h2>Training Schedule</h2>
          <Calendar onChange={handleDateChange} value={selectedDate} />
          <div className="slots">
            <h3>Available Time Slots</h3>
            {availableSessions.length > 0 ? (
              availableSessions.map((session) => (
                <div key={session.id} className="slot">
                  <p>{session.time}</p>
                  <button
                    onClick={() => handleBooking(session.id)}
                    className="btn"
                  >
                    Book
                  </button>
                </div>
              ))
            ) : (
              <p>No available slots for this date.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingSchedule
