import { fireEvent, render, screen } from "@testing-library/react";
import {MemoryRouter } from 'react-router-dom'

import Main from "./components/Main";
import BookingForm from "./components/BookingForm";
import BookingPage from "./pages/BookingPage";

const possibleTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const fetchAPIMock = (dateString) => {
  const lsBookingData = JSON.parse(localStorage.getItem("bookingData"));
  let reservedBookings = lsBookingData.filter((b) => b.date === dateString);
  let availableTimes = [...possibleTimes];
  if (reservedBookings.length > 0) {
    let reservedTimes = reservedBookings.map((b) => b.time);
    availableTimes = possibleTimes.filter(
      (ptime) => !reservedTimes.includes(ptime)
    );
  }
  return Promise.resolve(availableTimes);
};

const submitApiMock = (formData) => {
  const lsBookingData = JSON.parse(localStorage.getItem("bookingData"));
  if (formData.date && formData.time) {
    const bookingIdx = lsBookingData.indexOf(formData.date);
    if (bookingIdx === -1 || lsBookingData[bookingIdx].time !== formData.time) {
      lsBookingData.push(formData);
      localStorage.setItem("bookingData", JSON.stringify(lsBookingData));
      return Promise.resolve(true);
    } else {
      return Promise.reject(false);
    }
  }
  return Promise.reject(false);
}


test("Renders the Little Lemon heading", () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Main />
    </MemoryRouter>
  );
  const headingElement = screen.getAllByText(/Little Lemon/i);
  expect(headingElement[0]).toBeInTheDocument();
});

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];

  render(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Initialize availableItems array", () => {
  localStorage.setItem("bookingData", JSON.stringify([]));
  window.fetchAPI = jest.fn(x => fetchAPIMock(x));
  window.submitAPI = jest.fn(x => submitApiMock(x));

  render(<MemoryRouter initialEntries={['/booking']}><BookingPage /></MemoryRouter>);

  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
});

test("Update availableItems array", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  localStorage.setItem("bookingData", JSON.stringify([]));
  window.fetchAPI = jest.fn(x => fetchAPIMock(x));
  window.submitAPI = jest.fn(x => submitApiMock(x));
  const updateTimes = jest.fn();
  const submitForm = jest.fn();

  render(
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
  );

  const dateInput = screen.getByTestId("res-date");
  fireEvent.mouseDown(dateInput);
  fireEvent.change(dateInput, { target: { value: "2024-05-17" } });
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(updateTimes).toHaveBeenCalledTimes(1);
});
