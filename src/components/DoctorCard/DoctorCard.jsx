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
      <div className="flex flex-col items-start hover:shadow-2xl hover:shadow-blue-300 hover:cursor-pointer dark:hover:shadow-none mt-5 p-0 h-full rounded-2xl">
        <div className="bg-slate-500 rounded-t-2xl w-full h-52 md:h-60">
          <img src={picture} alt="service-icon" className="h-full w-full" />
        </div>
        <div className="px-5 border-0 border-solid border-b border-l border-r border-r-gray-300 border-l-gray-300 border-b-gray-300 hover:border-b-primary dark:border-r-gray-700 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:border-b-primaryLight w-full h-full rounded-b-2xl">
          <h3 className="mt-5 text-2xl">{name}</h3>
          <div className="mt-4 w-full flex justify-between">
            <div className="bg-primaryLight text-primary font-bold py-1 px-2 rounded-md text-sm">
              {specialization}
            </div>
            <div className="font-bold flex items-center">
              <i class="fa-solid fa-star text-yellow-500 text-[1.1rem]"></i>
              <p className="ml-1">
                {rating}({noOfReviews})
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-bold">{noOfPatients} Patients</p>
          </div>
          <div className="mt-2 text-gray-500 dark:text-gray-300">
            <p>{location}</p>
          </div>
        </div>
      </div>
    </Grid>
  )
}
