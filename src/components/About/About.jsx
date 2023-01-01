import React from "react"
import { Container, Grid, Button } from "@mui/material"
import { AboutAppointmentContainer } from "../AboutAppointmentContainer"
import { ABOUT_CHECK_POINTS } from "../../utils/constants"

export const About = () => {
  return (
    <Container>
      <div className="pt-20 md:pt-40">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="flex justify-start">
              <img
                src="/assets/femal-doctor.png"
                alt="about-us-image"
                className="hidden w-[35rem] md:block h-auto"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="flex justify-start py-2 px-10 md:py-0 md:px-0">
              <AboutAppointmentContainer
                topic="About Us"
                mainHeading1="Quality health stars"
                mainHeading2="with quality doctors."
                para1="Locally owned, not-for-profit and nationally recognized, Freeman Health System includes"
                para2="Freeman Hospital West, Freeman Hospital East, Freeman Neosho Hospital and Ozark Center - the
        area's largest provider of behavioural health services"
                btnText="Learn more"
                checkPoints={ABOUT_CHECK_POINTS}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
