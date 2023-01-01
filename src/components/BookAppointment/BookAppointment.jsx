import React from "react"
import { Container, Grid } from "@mui/material"
import { AboutAppointmentContainer } from "../AboutAppointmentContainer"
import { APPOINTMENT_CHECK_POINTS } from "../../utils/constants"

export const BookAppointment = () => {
  return (
    <Container>
      <div className="pt-32 md:pt-40">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="flex justify-center py-2 px-10 md:py-10 md:px-0">
              <AboutAppointmentContainer
                topic="Book Appointment"
                mainHeading1="Book an appointment"
                mainHeading2="today, Online."
                para1="Locally owned, not-for-profit and nationally recognized, Freeman Health System includes"
                para2="Freeman Hospital West, Freeman Hospital East, Freeman Neosho Hospital and Ozark Center - the
        area's largest provider of behavioural health services"
                btnText="See Availability"
                checkPoints={APPOINTMENT_CHECK_POINTS}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="flex justify-end">
              <img
                src="/assets/doctor2.png"
                alt="about-us-image"
                className="hidden w-[35rem] md:block h-auto"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
