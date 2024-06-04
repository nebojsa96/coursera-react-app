import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";

const possibleTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function timesReducer(state, action) {
  if (action.type === "init") {
    return [...action.initialTimes];
  } else if (action.type === "update") {
    // return [...state.filter((time) => time !== action.reservedTime)];
    return [...action.updatedTimes];
  }
  throw Error("Unknown action");
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.fetchAPI) {
      initializeTimes();
    }
  }, []);

  const initializeTimes = () => {
    const today = getDateString(new Date());
    window
      .fetchAPI(today)
      // .then((response) => response.json())
      .then((jsonData) => {
        dispatch({ type: "init", initialTimes: jsonData });
      })
      .catch((error) => console.log(error));
  };

  const updateTimes = (date) => {
    window
      .fetchAPI(date)
      // .then((response) => response.json())
      .then((jsonData) => {
        dispatch({ type: "update", updatedTimes: jsonData });
      })
      .catch((error) => console.log(error));
  };

  const submitForm = (form) => {
    window
      .submitAPI(form)
      //   // .then((response) => response.json())
      .then((result) => {
        if (result) {
          navigate("/booking-confirmation");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={(date) => {
          updateTimes(date);
        }}
        submitForm={(form) => {
          submitForm(form);
        }}
        children={
          <div className="booking-slots">
            {possibleTimes.map((t) => (
              <BookingSlot reserved={!availableTimes.includes(t)} time={t} />
            ))}
          </div>
        }
      />
    </>
  );
}

function getDateString(date) {
  return date.toISOString().split("T")[0];
}

function getTimeString(date) {
  return date.toTimeString().split(" ")[0].slice(0, 5);
}

export default BookingPage;
