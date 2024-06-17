// src/components/TrainingSchedule.js
import React, { useState, useEffect } from "react"
import "./TrainingSchedule.css"
import logo from "../assets/logo.png"
import axios from "axios"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const TrainingSchedule = () => {
  const [availableSlots, setAvailableSlots] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/available_slots?date=${
            selectedDate.toISOString().split("T")[0]
          }`
        )
        setAvailableSlots(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSlots()
  }, [selectedDate])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleBooking = async (slotId) => {
    try {
      const response = await axios.post("http://localhost:3000/bookings", {
        booking: { slot_id: slotId, date: selectedDate },
      })
      console.log(response.data)
      // You can add more logic here, such as showing a success message or updating the UI
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
            {availableSlots.length > 0 ? (
              availableSlots.map((slot) => (
                <div key={slot.id} className="slot">
                  <p>{slot.time}</p>
                  <button
                    onClick={() => handleBooking(slot.id)}
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
