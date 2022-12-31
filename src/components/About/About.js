import React from "react"
import { Container, Grid, Button } from "@mui/material"
import { AboutAppointmentContainer } from "../AboutAppointmentContainer/"

const CHECK_POINTS = [
  {
    description: "We practice medicine that are historical",
  },
  { description: "We have access to amazing treatments" },
]

export const About = () => {
  return (
    <Container>
      <div className="pt-20 md:pt-25 px-20 md:px-5">
        <Grid container>
          <Grid item xs={12} md={6} className="flex justify-center">
            <img
              src="/assets/femal-doctor.png"
              alt="about-us-image"
              className="hidden w-[35rem] md:block h-auto"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutAppointmentContainer
              topic="About Us"
              mainHeading1="Quality health stars"
              mainHeading2="with quality doctors."
              para1="Locally owned, not-for-profit and nationally recognized, Freeman Health System includes"
              para2="Freeman Hospital West, Freeman Hospital East, Freeman Neosho Hospital and Ozark Center - the
        area's largest provider of behavioural health services"
              btnText="Learn more"
              checkPoints={CHECK_POINTS}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
