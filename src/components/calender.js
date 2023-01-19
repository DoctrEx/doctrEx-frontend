import React, { useState } from "react";
// import { Paper } from "@material-ui/core";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import "./calender.css";

export default function AppointmentCalendar() {
  const [date, setDate] = useState(new Date());
  localStorage.setItem("appointment-date", date.toString().slice(4, 16));
  const locale = "fr-CA";
  console.log(date.toString().slice(4, 16));
  return (
    <div className="calendar">
      {/* <Paper elevation={3}> */}
      <Calendar
        onChange={setDate}
        value={date}
        formatDay={(date) =>
          new Intl.DateTimeFormat(locale, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(date)
        }
        className="arc"
      />
      {/* </Paper> */}
    </div>
  );
}
