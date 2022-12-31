import React from "react"
import { DoctorCard } from "../DoctorCard"
import { Container, Grid } from "@mui/material"
import { DOCTORS } from "../../utils/constants"

export const DoctorContainer = () => {
  return (
    <Container>
      <div className="pt-20 md:pt-32 px-20 md:px-5">
        <p className="text-primary text-center text-[1.5rem] font-semibold">Professional Team</p>
        <h1 className="text-center text-4xl md:text-5xl mt-5">Meet Our Experienced Doctors.</h1>
        <Grid container className="mt-1 md:mt-10" spacing={2}>
          {DOCTORS.map((doctor) => (
            <DoctorCard
              picture={doctor.picture}
              name={doctor.name}
              specialization={doctor.specialization}
              rating={doctor.rating}
              noOfReviews={doctor.noOfReviews}
              noOfPatients={doctor.noOfPatients}
              location={doctor.location}
            />
          ))}
        </Grid>
      </div>
    </Container>
  )
}
