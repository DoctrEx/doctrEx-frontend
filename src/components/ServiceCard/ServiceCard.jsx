import React from "react"
import { Grid } from "@mui/material"

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <Grid item xs={12} md={3}>
      <div className="flex flex-col items-center hoverable mt-1 py-8 border border-solid border-gray-300 dark:border-gray-700 rounded-2xl px-2">
        <img src={icon} alt="service-icon" className="w-12" />
        <h3 className="mt-5">{title}</h3>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Grid>
  )
}
