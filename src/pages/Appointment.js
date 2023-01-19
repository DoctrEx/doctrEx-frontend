import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Sidebar from "../components/Navbar";
import "./appointment.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import axios from "axios";

const Appointment = () => {
  // eslint-disable-next-line
  console.log("pain");
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const slug = localStorage.getItem("roleId") == 1 ? "patient" : "doctor";
  const profilePicture = localStorage.getItem("profilePicture");
  const [data, setData] = useState([]);
  const [sudo, setsudo] = useState([]);
  async function getAppointments() {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/appointments/${slug}?id=${id}`
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
  // const data = [
  //   {
  //     img: "/assets/dr.1.jpg",
  //     name: "Dr.Samel",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/dr.2.jpg",
  //     name: "Dr.Iqraa",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Pending",
  //   },
  //   {
  //     img: "/assets/dr.3.jpg",
  //     name: "Dr.Nasia",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/dr.4.jpg",
  //     name: "Dr.Angil",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/dr.5.jpg",
  //     name: "Dr.Angil",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/doctor.jpg",
  //     name: "Dr.Angil",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/doctor.jpg",
  //     name: "Dr.Angil",
  //     speciality: "Dermatology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/doctor.jpg",
  //     name: "Dr.Angil",
  //     speciality: "Cardiology",
  //     date: "2021/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/doctor.jpg",
  //     name: "Dr.Angil",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/doctor.jpg",
  //     name: "Dr.Angil",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  //   {
  //     img: "/assets/Ben.jpg",
  //     name: "Dr.Benne",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Pending",
  //   },
  //   {
  //     img: "/assets/Samar.jpg",
  //     name: "Dr.Samar",
  //     speciality: "Cardiology",
  //     date: "2022/03/07",
  //     status: "Complete",
  //   },
  // ];

  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    setsudo(
      data.filter(
        (data) =>
          data.doctorName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data.patientName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data.symptoms.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.speciality
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data.dateTime.includes(e.target.value.toLowerCase())
      )
    );
  };
  // console.log("pain");
  // console.log("data1", data);
  console.table("sudo", sudo);
  const report1 = sudo?.map((item) => (
    <div className="container-appointment-row">
      <div className="container-content-info">
        <img
          className="container-content-picture"
          src={`/assets/${item.profilePicture}`}
          alt="profile"
        />

        {slug == "patient" ? item.doctorName : item.patientName}
      </div>
      <div>{item.dateTime}</div>
      <div>{slug == "patient" ? item.speciality : item.symptoms}</div>
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
          {slug == "patient" ? (
            <div className="container-get">
              <button className="container-get-appointment">
                <Link
                  to={"/appointment/book"}
                  style={{ textDecoration: "none" }}
                >
                  Get Appointment
                </Link>
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="container-content-1-appointment">{report1}</div>
      </Container>
    </div>
  );
};

export default Appointment;
