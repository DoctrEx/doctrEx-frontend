import React from "react"
import { Grid } from "@mui/material"

export const DoctorCard = ({
  picture,
  name,
  specialization,
  rating,
  noOfReviews,
  noOfPatients,
  location,
}) => {
  return (
    <Grid
      sx={{ paddingY: "2rem" }}
      item
      xs={12}
      md={3}
      className="flex flex-col items-center hoverable mt-5"
    >
      <div className="">
        <img
          src="/assets/doctor1.png"
          alt="service-icon"
          className="h-auto"
          style={{ width: "256px" }}
        />
      </div>
      <h3 className="mt-5">Dr. Abdul Raffay</h3>
      <div className="w-full flex justify-between">
        <div className="bg-primary">Cardiology</div>
        <div>4.9(350)</div>
      </div>
      <p>800 F Bounty Eve 810, Las Vegas</p>
    </Grid>
  )
}
