import "./BookingSlot.css";

function BookingSlot(props) {
  return (
    <div
      className={"booking-slot " + (props.reserved ? "reserved" : "available")}
    >{props.time}</div>
  );
}

export default BookingSlot;
