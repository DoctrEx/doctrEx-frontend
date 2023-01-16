import React, { useState } from "react";
import { Container } from "@mui/material";
import Sidebar from "../components/Navbar";
import "./appointment.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

// import DenseTable from "../components/Table";
// import DataTableResponsiveDemo from "../components/Table";

const Appointment = () => {
  // eslint-disable-next-line
  const [name, setName] = useState("Sofia Gill");
  const data = [
    {
      img: "/assets/Sulangi.jpg",
      name: "Dr.Samel",
      speciality: "Cardiology",
      date: "2022/03/07",
      status: "Complete",
    },
    {
      img: "/assets/iqra.jpg",
      name: "Dr.Iqraa",
      speciality: "Cardiology",
      date: "2022/03/07",
      status: "Pending",
    },
    {
      img: "/assets/Nasia.jpg",
      name: "Dr.Nasia",
      speciality: "Cardiology",
      date: "2022/03/07",
      status: "Complete",
    },
    {
      img: "/assets/doctor.jpg",
      name: "Dr.Angil",
      speciality: "Cardiology",
      date: "2022/03/07",
      status: "Complete",
    },
    {
      img: "/assets/Ben.jpg",
      name: "Dr.Benne",
      speciality: "Cardiology",
      date: "2022/03/07",
      status: "Pending",
    },
    {
      img: "/assets/Samar.jpg",
      name: "Dr.Samar",
      speciality: "Cardiology",
      date: "2022/03/07",
      status: "Complete",
    },
  ];

  const report1 = data.map((item) => (
    <div className="container-appointment-row">
      <div className="container-content-info">
        <img
          className="container-content-picture"
          src={item.img}
          alt="profile"
        />

        {item.name}
      </div>
      <div>{item.date}</div>
      <div>{item.speciality}</div>
      <button
        style={{
          color:
            item.status === "Complete"
              ? "rgb(75, 181, 67)"
              : "rgb(247, 203, 115)",
          borderRadius: 20,
          backgroundColor:
            item.status === "Complete"
              ? "rgb(75, 181, 67, 0.25)"
              : " rgb(247, 203, 115, 0.25)",
          width: 124,
          height: 26,
          border: "none",
          fontWeight: "bold",
        }}
      >
        <div>{item.status}</div>
      </button>
    </div>
  ));
  return (
    <div className="appointment-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Container className="appointment-container">
        <div className="container-profile">
          <img
            className="container-profile-picture"
            src="/assets/sofia.jpg"
            alt="profile"
          />
          <h2> {name} !</h2>
        </div>
        <div className="container-search-get">
          <div className="container-search">
            <TextField
              className="inputRounded"
              variant="outlined"
              fullWidth
              label="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="icon-search" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="container-get">
            <button className="container-get-appointment">
              Get Appointment
            </button>
          </div>
        </div>
        <div className="container-content-1-appointment">{report1}</div>
      </Container>
    </div>
  );
};

export default Appointment;
