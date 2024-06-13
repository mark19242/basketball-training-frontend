// src/components/TrainingSchedule.js
import React, { useState, useEffect } from "react"
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
          "http://localhost:3000/available_slots"
        )
        setAvailableSlots(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSlots()
  }, [])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleBooking = async (slotId) => {
    try {
      const response = await axios.post("http://localhost:3000/bookings", {
        booking: { slot_id: slotId, date: selectedDate },
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="training-schedule">
      <h2>Training Schedule</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <div className="slots">
        {availableSlots.map((slot) => (
          <div key={slot.id} className="slot">
            <p>{slot.time}</p>
            <button onClick={() => handleBooking(slot.id)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrainingSchedule
