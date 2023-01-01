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
    <Grid item xs={12} md={3}>
      <div className="flex flex-col items-start hoverable mt-5 p-0 h-full rounded-2xl">
        <div className="bg-slate-500 rounded-t-2xl w-full h-52 md:h-60">
          <img src="/assets/femal-doctor.png" alt="service-icon" className="h-full w-full" />
        </div>
        <div className="px-5 border border-solid border-primary w-full h-full rounded-b-2xl">
          <h3 className="mt-5 text-2xl">Dr. Abdul Raffay</h3>
          <div className="mt-3 w-full flex justify-between">
            <div className="bg-primaryLight text-primary font-bold py-1 px-2 rounded-md text-sm">
              Cardiology
            </div>
            <div className="font-bold flex items-center">
              <i class="fa-solid fa-star text-yellow-500 text-[1.1rem]"></i>
              <p className="ml-1">4.9(350)</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="font-bold">+20000 Patients</p>
          </div>
          <div className="mt-1 text-gray-500 font-semibold">
            <p>800 F Bounty Eve 810, Las Vegas</p>
          </div>
        </div>
      </div>
    </Grid>
  )
}
