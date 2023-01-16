// import React, { useState } from "react";
import { Container } from "@mui/material";
import AppointmentCalendar from "../components/calender";
import Sidebar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import "./confirm-appointment.css";

const ConfirmAppointment = () => {
  const data = {
    img: "/assets/Nasia.jpg",
    name: "Dr.Nasia   Adams",
    speciality: "Cardiology",
    price: 200,
    time: ["12:00-12:15", "12:15-12:30", "12:30-12:45", "12:45-1:00"],
  };
  console.log("pain")
  const time = data.time.map((item) => (
    <h3 className="container-time" onClick={() => console.log(item)}>
      {item}
    </h3>
  ));
  return (
    <div className="confirm-appointment-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Container className="confirm-appointment-container">
        <div className="confirm-container-profile">
          <img
            className="container-confirm-profile-picture"
            src={data.img}
            alt="profile"
          />
          <div className="container-profile-detail">
            <h2>Name</h2>
            <h3>{data.name}</h3>
          </div>
          <div className="container-profile-detail">
            <h2>Speciality</h2>
            <h3>{data.speciality}</h3>
          </div>
          <div className="container-profile-detail">
            <h2>Price</h2>
            <h3>{data.price} $</h3>
          </div>
        </div>
        <div className="container-book">
          <div className="container-book-calender">
            <AppointmentCalendar />
            <div className="container-book-calender-time">
              <h2 style={{ textAlign: "center" }}>TIME</h2>
              {time}
            </div>
          </div>
          <div className="container-book-time">
            {/* <form className="submit-form">
              <label for="name" className="label-field">
                Name:
              </label>
              <input type="text" name="name" className="input-field" />
              <label for="contact" className="label-field">
                Contact:
              </label>
              <input type="number" name="contact" className="input-field" />
              <label for="symptoms" className="label-field">
                Symptoms:
              </label>
              <input type="symptoms" name="symptoms" className="input-field" />
            </form> */}
            <TextField
              className="inputRounded-text"
              variant="outlined"
              fullWidth
              label="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
            <TextField
              className="inputRounded-text"
              variant="outlined"
              fullWidth
              label="Contact"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
            <TextField
              className="inputRounded-text-symptoms"
              variant="outlined"
              fullWidth
              label="Symptoms"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="container-confirm">
          <button className="confirm-button ">confirm</button>
        </div>
      </Container>
    </div>
  );
};

export default ConfirmAppointment;
