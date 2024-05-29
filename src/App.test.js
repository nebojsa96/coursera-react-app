import { fireEvent, render, screen } from "@testing-library/react";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm";

test("Renders the Little Lemon heading", () => {
  render(<Main />);
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
  const availableTimes = ["17:00", "18:00", "19:00"];
  render(<BookingForm availableTimes={availableTimes} />);
  const optionsElements = screen.getAllByRole("option");

  expect(optionsElements.length).toBe(availableTimes.length + 2);
});

test("Update availableItems array", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const updateTimes = jest.fn();
  render(
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
  );

  const dateInput = screen.getByTestId("res-date");
  fireEvent.mouseDown(dateInput);
  fireEvent.change(dateInput, { target: { value: "2024-05-17" } });
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(updateTimes).toHaveBeenCalled();
});
