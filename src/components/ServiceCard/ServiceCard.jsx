import React from "react"
import { Container, Grid } from "@mui/material"

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <Grid
      sx={{ paddingY: "2rem" }}
      item
      xs={12}
      md={3}
      className="flex flex-col items-center hoverable mt-5"
    >
      <img src={icon} alt="service-icon" className="w-12" />
      <h3 className="mt-5">{title}</h3>
      <p className="mt-3 text-center">{description}</p>
    </Grid>
  )
}
