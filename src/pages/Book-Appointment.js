import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Sidebar from "../components/Navbar";
import "./book-appointment.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link } from "react-router-dom";
import axios from "axios";

const BookAppointment = () => {
  // eslint-disable-next-line
  console.log("pain");
  const name = localStorage.getItem("name");
  const profilePicture = localStorage.getItem("profilePicture");

  const [data, setData] = useState([]);
  const [sudo, setsudo] = useState([]);
  async function getAppointments() {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/appointments/`
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

  // const userData = (item, index) => {
  //   console.log(item, index);
  //   localStorage.setItem("dr-name", item.name);
  //   localStorage.setItem("dr-speciality", item.speciality);
  //   localStorage.setItem("dr-fees", item.fees);
  //   localStorage.setItem("dr-profilePicture", item.profilePicture);
  // };
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    setsudo(
      data.filter(
        (data) =>
          data.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.speciality[0]
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data.fees.includes(e.target.value.toLowerCase())
      )
    );
  };
  console.log("sudo", sudo);
  const report1 = sudo?.map((item) => (
    <div className="container-book-appointment-row" key={item.id}>
      <div className="container-content-info">
        <img
          className="container-content-picture"
          src={`/assets/${item.profilePicture}`}
          alt="profile"
        />

        {`Dr.${item.name.slice(0, 5)}`}
      </div>
      <div>{item.speciality[0].slice(0, 8)}</div>
      <div>{item.fees}$</div>
      <Link to={`/appointment/confirm/${item.id}`}>
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
            cursor: "pointer",
          }}
          // onClick={console.log(index)}
        >
          <div>
            <ReplyIcon style={{ fontSize: "30" }} />
          </div>
        </button>
      </Link>
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

export default BookAppointment;
