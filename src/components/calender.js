import React, { useState } from "react";
// import { Paper } from "@material-ui/core";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import "./calender.css";

export default function AppointmentCalendar() {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <div className="calendar">
      {/* <Paper elevation={3}> */}
      <Calendar onChange={setDate} value={date} className="arc" />
      {/* </Paper> */}
    </div>
  );
}
