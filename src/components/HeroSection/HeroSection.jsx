import React from "react"
import { Grid, Container, Button } from "@mui/material"

export const HeroSection = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} className="flex flex-col items-center justify-center">
          <div className="block md:hidden mb-12">
            <img src="/assets/doctor1.png" alt="hero-sec-img" className="w-full h-[25rem]" />
          </div>
          <div>
            <h1 className="text-4xl md:text-7xl">
              Find <span className="text-primary">Best Clinic</span> <br /> To Get Solutions.
            </h1>
            <p className="text-[1.1rem] md:text-xl mt-5 mb-8 text-gray-600 dark:text-gray-300">
              Health is one of the most important things for us therefore immediately check your
              health for a good and wise you.
            </p>
            <div className="flex mt-5 space-x-3">
              <Button variant="contained" size="large" className="rounded-lg">
                Appointment
              </Button>
              <Button variant="contained" size="large" className="rounded-lg">
                Watch Video
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="hidden md:flex justify-center">
          <img src="/assets/doctor1.png" alt="hero-sec-img" className="h-auto object-cover" />
        </Grid>
      </Grid>
    </Container>
  )
}
