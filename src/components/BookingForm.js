import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./BookingForm.css";

const today = new Date().toISOString().split("T")[0];

function BookingForm(props) {
  useEffect(() => {
    formik.setFieldValue("time", props.availableTimes[0]);
  }, [props.availableTimes]);

  const formik = useFormik({
    initialValues: {
      date: today,
      time: props.availableTimes[0],
      guests: 1,
      occasion: "Birthday",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Field is required"),
      time: Yup.string().required("Field is required"),
      guests: Yup.number().min(1, "Minimum 1 guest").max(10, "Maximum 10 guests").required("Field is required"),
      occasion: Yup.string().required("Field is required"),
    }),
  });

  const handleSubmit = (formData) => {
    console.log(formData);
    props.submitForm(formData);
  };

  return (
    <main className="booking">
      <h2>Reserve a Table</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <label className="card-title" htmlFor="date">
            Choose date <span>*</span>
          </label>
          <input
            type="date"
            id="date"
            data-testid="date"
            value={formik.values.date}
            min={today}
            className={formik.errors.date ? "invalid" : ""}
            onChange={(e) => {
              formik.handleChange(e);
              props.updateTimes(e.target.value);
            }}
          />
          {formik.errors.date ? (
            <small className="error-msg">{formik.errors.date}</small>
          ) : null}
        </div>
        <div className="form-field">
          <label className="card-title" htmlFor="time">
            Choose time <span>*</span>
          </label>
          <select
            id="time"
            data-testid="time"
            className={formik.errors.time ? "invalid" : ""}
            value={formik.values.time}
            onChange={formik.handleChange}
          >
            {props.availableTimes.map((t) => (
              <option value={t} key={t}>
                {t}
              </option>
            ))}
          </select>
          {formik.errors.time ? (
            <small className="error-msg">{formik.errors.time}</small>
          ) : null}
          {props.children}
        </div>
        <div className="form-field">
          <label className="card-title" htmlFor="guests">
            Number of guests <span>*</span>
          </label>
          <input
            type="number"
            placeholder="1"
            id="guests"
            data-testid="guests"
            min="1"
            max="10"
            className={formik.errors.guests ? "invalid" : ""}
            value={formik.values.guests}
            onChange={formik.handleChange}
          />
          {formik.errors.guests ? (
            <small className="error-msg">{formik.errors.guests}</small>
          ) : null}
        </div>
        <div className="form-field">
          <label className="card-title" htmlFor="occasion">
            Occasion <span>*</span>
          </label>
          <select
            id="occasion"
            data-testid="occasion"
            className={formik.errors.occasion ? "invalid" : ""}
            value={formik.values.occasion}
            onChange={formik.handleChange}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formik.errors.occasion ? (
            <small className="error-msg">{formik.errors.occasion}</small>
          ) : null}
        </div>
        <button
          className="button button-primary"
          type="submit"
          aria-label="Submit form"
          disabled={!formik.isValid}
        >
          Make Your reservation
        </button>
      </form>
    </main>
  );
}

export default BookingForm;
