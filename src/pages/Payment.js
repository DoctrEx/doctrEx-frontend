import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Sidebar from "../components/Navbar";
import "./book-appointment.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import axios from "axios";

const Payment = () => {
  // eslint-disable-next-line

  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const slug = localStorage.getItem("roleId") == 1 ? "patient" : "doctor";
  const profilePicture = localStorage.getItem("profilePicture");
  const [data, setData] = useState([]);
  const [sudo, setsudo] = useState([]);
  async function getAppointments() {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/payments/${slug}?id=${id}`
        // `http://127.0.0.1:8000/api/appointments/patient?id=101`
      );
      setData(data);
      setsudo(data);
      // console.log("data:", data);
      // setFriendDetail(data[0])
      // getFollowerData(data[0])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAppointments();
  }, []);

  console.log("sudo", sudo);
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    setsudo(
      sudo.filter(
        (data) =>
          data?.doctorName
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data?.patientName
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data.option.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.fees.toString().includes(e.target.value)
      )
    );
    if (e.target.value.length == 0) {
      setsudo(data);
    }
  };

  const report1 = sudo.map((item) => (
    <div className="container-book-appointment-row">
      <div className="container-content-info">
        <img
          className="container-content-picture"
          src={`/assets/${item.profilePicture}`}
          alt="profile"
        />

        {slug == "patient" ? item.doctorName : item.patientName}
      </div>
      <button
        style={{
          color:
            item.option === "Cash USD($)"
              ? "rgb(255, 182, 193)"
              : item.option === "Mobile Pay"
              ? "rgb(255,165,0)"
              : item.option === "Debit Card"
              ? "	rgb(153,50,204)"
              : "rgb(75, 181, 67)",
          borderRadius: 20,
          backgroundColor:
            item.option === "Cash USD($)"
              ? "rgb(255, 182, 193,0.25)"
              : item.option === "Mobile Pay"
              ? "rgb(255,165,0,0.25)"
              : item.option === "Debit Card"
              ? "rgb(153,50,204,0.25)"
              : "rgb(75, 181, 67,0.25)",
          width: 124,
          height: 26,
          border: "none",
          fontWeight: "bold",
        }}
      >
        <div>{item.option}</div>
      </button>
      <div>{item.fees}$</div>
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
            src={`/assets/${profilePicture}`}
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
              value={searchText}
              onChange={searchHandler}
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
