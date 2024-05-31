import { useState, useEffect } from "react";
import "./BookingForm.css";

const today = new Date().toISOString().split('T')[0];

function BookingForm(props) {
  const [bookingDate, setBookingDate] = useState(today);
  const [bookingTime, setBookingTime] = useState(props.availableTimes[0]);
  const [guestsNumber, setGuestsNumber] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  useEffect(() => {
    setBookingTime(props.availableTimes[0]);
  }, [props.availableTimes]);

  const getIsFormValid = () => {
    // Implement this function
    return bookingDate;
  };

  const clearForm = () => {
    setBookingDate(today);
    setGuestsNumber("1");
    setOccasion("Birthday");
  };

  const handleSubmit = (e) => {
    const formData = {
        date: bookingDate,
        time: bookingTime,
        guests: guestsNumber,
        occasion: occasion
    }
    props.updateTimes(formData.date);
    alert(`Reservation created for: ${bookingDate} ${bookingTime}`);
    console.log(formData);
    // clearForm();
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
          data-testid="res-date"
          value={bookingDate}
          min={today}
          required
          onChange={(e) => { 
            setBookingDate(e.target.value);
            props.updateTimes(e.target.value);
          }}
        />
        <label className="card-title" htmlFor="res-time">
          Choose time
        </label>
        <select
          id="res-time"
          data-testid="res-time"
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
        >
            {props.availableTimes.map(t =>
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
          data-testid="guests"
          value={guestsNumber}
          onChange={(e) => setGuestsNumber(e.target.value)}
        />
        <label className="card-title" htmlFor="occasion">
          Occasion
        </label>
        <select
          id="occasion"
          data-testid="occasion"
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
