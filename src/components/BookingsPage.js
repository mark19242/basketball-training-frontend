// src/components/BookingsPage.js
import React, { useState, useEffect } from "react"
import axios from "axios"
import "./BookingsPage.css"

const BookingsPage = ({ userId }) => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/bookings?user_id=${userId}`
        )
        setBookings(response.data)
      } catch (error) {
        console.error("Error fetching bookings:", error)
      }
    }

    fetchBookings()
  }, [userId])

  const handleCancel = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:3000/bookings/${bookingId}`)
      setBookings(bookings.filter((booking) => booking.id !== bookingId))
    } catch (error) {
      console.error("Error canceling booking:", error)
    }
  }

  return (
    <div className="bookings-page-container">
      <h2>Your Bookings</h2>
      <div className="bookings-list">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking.id} className="booking-item">
              <p>
                Date:{" "}
                {new Date(booking.training_session.date).toLocaleDateString()}
              </p>
              <p>Time: {booking.training_session.time}</p>
              <button
                onClick={() => handleCancel(booking.id)}
                className="btn cancel-btn"
              >
                Cancel
              </button>
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  )
}

export default BookingsPage
