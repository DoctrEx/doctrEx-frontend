import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import AppointmentCalendar from "../components/calender";
import Sidebar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import "./confirm-appointment.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

const ConfirmAppointment = () => {
  const { id } = useParams();
  const notify = (message) => toast.error(message);
  const approved = (message) => toast.success(message);
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [contact, setContact] = useState("");

  const handleChangeContact = (event) => {
    setContact(event.target.value);
  };

  const [symptoms, setSymptoms] = useState("");

  const handleChangeSymptoms = (event) => {
    setSymptoms(event.target.value);
  };

  const [data, setData] = useState();
  const time = ["12:00-12:15", "12:15-12:30", "12:30-12:45", "12:45-1:00"];

  const [duration, setDuration] = useState("");
  async function getUsers() {
    try {
      console.log("Making API call");
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/appointments/user/${id}`
      );
      console.log("data1:", data);
      setData(data);
      // console.log("data:", data);
      // setFriendDetail(data[0])
      // getFollowerData(data[0])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("IN USE EFFECT");
    getUsers();
  }, [id]);

  const setTime = time.map((item) => (
    <h3
      className="container-time"
      onClick={() => {
        setDuration(item);
        console.log(item);
      }}
    >
      {item}
    </h3>
  ));

  const confirmAppointment = (event) => {
    event.preventDefault();
    console.log(
      name,
      name.length == 0,
      symptoms,
      symptoms.length == 0,
      contact,
      contact.length == 0,
      localStorage.getItem("appointment-date"),
      localStorage.getItem("appointment-date") == 0,
      duration,
      duration == 0
    );
    if (
      name.length == 0 ||
      symptoms.length == 0 ||
      contact.length == 0 ||
      localStorage.getItem("appointment-date") == 0 ||
      duration.length == 0
    ) {
      notify("All fields must be filled");
    } else {
      const values = {
        doctorId: id,
        doctorName: `Dr.${data.name.slice(0, 5)}`,
        speciality: data.speciality[0].slice(0, 11),
        fees: data.fees,
        patientId: localStorage.getItem("id"),
        patientName: name,
        symptoms: symptoms,
        profilePicture: data.profilePicture,
        dateTime: localStorage.getItem("appointment-date"),
        status: "Pending",
      };
      console.log(values);
      axios
        .post(`http://127.0.0.1:8000/api/appointments/`, values)
        .then((res) => {
          console.log(res.data);
          approved(res.data);
        })
        .catch((error) => {
          console.error(error);
          notify(error.response.data.message);
        });
    }
  };
  return (
    <div className="confirm-appointment-page">
      <Toaster />
      <div className="sidebar">
        <Sidebar />
      </div>
      <Container className="confirm-appointment-container">
        <div className="confirm-container-profile">
          <img
            className="container-confirm-profile-picture"
            src={`/assets/${data?.profilePicture}`}
            alt="profile"
          />
          <div className="container-profile-detail">
            <h2>Name</h2>
            <h3>{data?.name}</h3>
          </div>
          <div className="container-profile-detail">
            <h2>Speciality</h2>
            <h3>{data?.speciality}</h3>
          </div>
          <div className="container-profile-detail">
            <h2>Price</h2>
            <h3>{data?.fees} $</h3>
          </div>
        </div>
        <form onSubmit={confirmAppointment}>
          <div className="container-book">
            <div className="container-book-calender">
              <AppointmentCalendar />
              <div className="container-book-calender-time">
                <h2 style={{ textAlign: "center" }}>TIME</h2>
                {setTime}
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
                value={name}
                onChange={handleChangeName}
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
                value={contact}
                onChange={handleChangeContact}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
              {/* <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" style={{ bg: "red" }}>
              Option
              </InputLabel>
              <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              className="inputRounded-text"
              variant="outlined"
              value={option}
              label="option"
              onChange={handleChange}
              >
              <MenuItem value={"Mobile Pay"}>Mobile Pay</MenuItem>
              <MenuItem value={"Cash USD($)"}>Cash USD($)</MenuItem>
              <MenuItem value={"Debit Card"}>Debit Card</MenuItem>
              <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
              </Select>
              </FormControl>
            </Box> */}
              <TextField
                className="inputRounded-text-symptoms"
                variant="outlined"
                fullWidth
                label="Symptoms"
                value={symptoms}
                onChange={handleChangeSymptoms}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="container-confirm">
            <button className="confirm-button " type="submit">
              confirm
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ConfirmAppointment;
