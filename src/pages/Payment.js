import React, { useState } from "react";
import { Container } from "@mui/material";
import Sidebar from "../components/Navbar";
import "./book-appointment.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Payment = () => {
  // eslint-disable-next-line
  const [name, setName] = useState("Sofia Gill");
  const data = [
    {
      img: "/assets/Sulangi.jpg",
      name: "Dr.Samel",
      speciality: "Cardiology",
      price: 100,
    },
    {
      img: "/assets/iqra.jpg",
      name: "Dr.Iqraa",
      speciality: "Cardiology",
      price: 170,
    },
    {
      img: "/assets/Nasia.jpg",
      name: "Dr.Nasia",
      speciality: "Cardiology",
      price: 200,
    },
    {
      img: "/assets/doctor.jpg",
      name: "Dr.Angil",
      speciality: "Cardiology",
      price: 156,
    },
    {
      img: "/assets/Ben.jpg",
      name: "Dr.Benne",
      speciality: "Cardiology",
      price: 194,
    },
    {
      img: "/assets/Samar.jpg",
      name: "Dr.Samar",
      speciality: "Cardiology",
      price: 135,
    },
  ];

  const report1 = data.map((item) => (
    <div className="container-book-appointment-row">
      <div className="container-content-info">
        <img
          className="container-content-picture"
          src={item.img}
          alt="profile"
        />

        {item.name}
      </div>
      <div>{item.speciality}</div>
      <div>{item.price}$</div>
      <button
        style={{
          color: "rgb(0, 97, 255)",
          borderRadius: 20,
          backgroundColor: "rgb(0, 97, 255,0.25)",
          width: 80,
          height: 30,
          border: "none",
          fontWeight: "bold",
          transform: "scaleX(-1)",
        }}
      >
        <div>
          <CloudDownloadIcon style={{ fontSize: "30" }} />
        </div>
      </button>
    </div>
  ));

  return (
    <div className="book-appointment-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Container className="book-appointment-container">
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
        </div>
        <div className="container-content-1-book-appointment">{report1}</div>
      </Container>
    </div>
  );
};

export default Payment;
