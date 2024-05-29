import { useState } from "react";
import "./BookingForm.css";

const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
];

function BookingForm() {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("17:00");
  const [guestsNumber, setGuestsNumber] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const getIsFormValid = () => {
    // Implement this function
    return bookingDate;
  };

  const clearForm = () => {
    // Implement this function
    setBookingDate("");
    setBookingTime("17:00");
    setGuestsNumber("1");
    setOccasion("Birthday");
  };

  const handleSubmit = (e) => {
    alert("Reservation created!");
    const formData = {
        date: bookingDate,
        time: bookingTime,
        guests: guestsNumber,
        occasion: occasion
    }
    console.log(formData);
    clearForm();
    e.preventDefault();
  };

  return (
    <main className="booking">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <label className="card-title" htmlFor="res-date">
          Choose date <span>*</span>
        </label>
        <input
          type="date"
          id="res-date"
          value={bookingDate}
          required
          onChange={(e) => setBookingDate(e.target.value)}
        />
        <label className="card-title" htmlFor="res-time">
          Choose time
        </label>
        <select
          id="res-time "
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
        >
            {availableTimes.map(t =>  
                <option value={t} key={t}>{t}</option>
            )}
        </select>
        <label className="card-title" htmlFor="guests">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestsNumber}
          onChange={(e) => setGuestsNumber(e.target.value)}
        />
        <label className="card-title" htmlFor="occasion">
          Occasion
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button
          className="button button-primary"
          type="submit"
          disabled={!getIsFormValid()}
        >
          Make Your reservation
        </button>
      </form>
    </main>
  );
}

export default BookingForm;
