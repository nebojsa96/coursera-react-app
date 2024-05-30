import "../App.css";
import BookingForm from "../components/BookingForm";
import { useReducer, useEffect } from "react";
import { fetchAPI } from "../api/api";

// const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function timesReducer(state, action) {
  if (action.type === "init") {
    return [...action.initialTimes];
  } else if (action.type === "update") {
    return [...state.filter((time) => time !== action.reservedTime)];
  }
  throw Error("Unknown action");
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = () => {
    fetchAPI('2024-06-01')
      // .then((response) => response.json()) 
      .then((jsonData) => dispatch({ type: "init", initialTimes: jsonData }))
      .catch((error) => console.log(error)); 
    // dispatch({ type: "init", initialTimes: initialTimes });
  };

  const updateTimes = (reservedTime) => {
    dispatch({ type: "update", reservedTime: reservedTime });
  };

  return (
    <>
      {availableTimes.map((time) => (
        <span>{time} | </span>
      ))}
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={(time) => {
          updateTimes(time);
        }}
      />
    </>
  );
}

export default BookingPage;
