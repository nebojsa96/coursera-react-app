import { useState, useEffect } from "react";
import "./BookingSlot.css";

function BookingSlot(props) {

  if(props.reserved) {
    return <div className="booking-slot reserved"></div>
  } else {
    return <div className="booking-slot available"></div>
  }
}

export default BookingSlot;
