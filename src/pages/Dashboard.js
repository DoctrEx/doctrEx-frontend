import React, { useState } from "react";
import { Container, Paper } from "@mui/material";
import Sidebar from "../components/Navbar";
import "./dashboard.css";
import Chart from "react-apexcharts";
import { Box } from "@mui/system";
// import DenseTable from "../components/Table";
// import DataTableResponsiveDemo from "../components/Table";

const Dashboard = () => {
  const pieOptions = {
    dataLabels: { enabled: false },
    legend: {
      position: "bottom",
      show: false,
    },
    colors: ["#ffa9dc", "#b2b0f7", "#ffe993"],
    // stroke:{
    //   colors:['#002']
    //  },
  };
  const pieSeries = [10, 20, 70];
  const barOptions = {
    colors: ["#ff4a8b"],
    dataLabels: { enabled: false },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: "#000",
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };
  const barSeries = [
    {
      data: [
        {
          x: "category A",
          y: 10,
        },
        {
          x: "category B",
          y: 18,
        },
        {
          x: "category C",
          y: 13,
        },
        {
          x: "category A",
          y: 10,
        },
        {
          x: "category B",
          y: 18,
        },
        {
          x: "category C",
          y: 13,
        },
      ],
    },
  ];
  // eslint-disable-next-line
  const [name, setName] = useState("Sofia Gill");
  // eslint-disable-next-line
  const [review, setReview] = useState({
    name: "Dr.Angilina",
    review:
      "Thank you, from the bottom of my heart, for everything you did to make sure my tooth decay was eradicated.",
  });
  // eslint-disable-next-line
  const [img, setImg] = useState();
  const data = [
    {
      type: "CT Scan",
      result: "Require attention",
      date: "23/1/2022",
    },
    { type: "4D Scan", result: "pending", date: "23/1/2022" },
    {
      type: "Glucose",
      result: "Typical result",
      date: "23/1/2022",
    },
    {
      type: "2D Echo",
      result: "Typical result",
      date: "23/1/2022",
    },
  ];
  const appointmentData = [
    { name: "Dr.Sulangi", date: "12:00 23/1/2022", img: "/assets/heart.png" },
    { name: "Dr.Zoha", date: "12:00 23/1/2022", img: "/assets/brain.png" },
    { name: "Dr.Angilina", date: "12:00 23/1/2022", img: "/assets/tooth.png" },
    { name: "Dr.Carner", date: "12:00 23/1/2022", img: "/assets/lever.png" },
  ];
  const appointment = appointmentData.map((item) => (
    <div className="container-content-2-appointment-main">
      <div className="container-content-2-appointment-1">
        <img
          className="container-content-2-appointment-picture"
          src={item.img}
          alt="profile"
        />
      </div>
      <div className="container-content-2-appointment-2">
        <h4>{item.name}</h4>
        <h5>{item.date}</h5>
      </div>
    </div>
  ));
  const report = data.map((item) => (
    <div className="container-report-row">
      <div>{item.type}</div>
      <button
        style={{
          color:
            item.result === "Typical result"
              ? "rgb(75, 181, 67)"
              : item.result === "pending"
              ? "rgb(247, 203, 115)"
              : "rgb(251, 1, 31,0.5)",
          borderRadius: 20,
          backgroundColor:
            item.result === "Typical result"
              ? "rgb(75, 181, 67, 0.25)"
              : item.result === "pending"
              ? " rgb(247, 203, 115, 0.25)"
              : "rgb(251, 1, 31, 0.25)",
          width: 124,
          height: 26,
          border: "none",
        }}
      >
        <div>{item.result}</div>
      </button>
      <div>{item.date}</div>
    </div>
  ));
  return (
    <div className="dashboard-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Container className="container">
        <div className="container-profile">
          <img
            className="container-profile-picture"
            src="/assets/sofia.jpg"
            alt="profile"
          />
          <h2> {name} !</h2>
        </div>
        <div className="container-intro">
          <h1> Hello {name} !</h1>
          <h4> An overview of our Activities</h4>
        </div>

        <div className="container-content">
          <div className="container-content-1">
            <div className="container-content-1-graph">
              {/* <Chart 
              type="pie"
              series={[10, 50, 40]}
              width={200}
              height={200}
              /> */}
              <Box sx={{display: 'flex', paddingTop: 3, paddingBottom: 3}} flexDirection='row' justifyContent='flex-start' alignItems='center'>
                <Chart
                  options={pieOptions}
                  series={pieSeries}
                  type="pie"
                  width="400"
                  height="250"
                />
                <Chart
                  options={barOptions}
                  series={barSeries}
                  type="bar"
                  width="400"
                  height="200"
                />
              </Box>
            </div>
            <div className="container-content-1-report">
              <h3 style={{ paddingLeft: 35, paddingTop: 10, fontSize: 20 }}>
                Test Results
              </h3>
              {report}
            </div>
          </div>
          <div className="container-content-2">
            <div className="container-content-2-appointment">
              <h3 style={{ paddingLeft: 35, paddingTop: 10, fontSize: 20 }}>
                Upcoming
              </h3>
              {appointment}
            </div>
            <div className="container-content-2-review">
              <h3 style={{ paddingLeft: 35, paddingTop: 10, fontSize: 20 }}>
                Review your experience
              </h3>
              <div className="container-content-2-review-main">
                <div className="container-content-2-review-1">
                  <img
                    className="container-content-2-review-picture"
                    src="/assets/doctor.jpg"
                    alt="profile"
                  />
                </div>
                <div className="container-content-2-review-2">
                  <h5>{review.name}</h5>
                  <h6>{review.review}</h6>
                </div>
                <div className="container-content-2-review-3"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
