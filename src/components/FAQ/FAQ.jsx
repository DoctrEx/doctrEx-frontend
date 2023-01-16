import { Container, Grid } from "@mui/material"
import React from "react"
import { CustomizedAccordions } from "../CustomizedAccordions"

export const FAQ = () => {
  return (
    <Container>
      <div className="pt-24 md:pt-32 px-10 md:px-0">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <div className="flex justify-start flex-col py-2 md:py-6">
              <div>
                <p className="text-primary text-[1.5rem] font-semibold">FAQ</p>
                <h1 className="text-4xl md:text-5xl mt-5">Frequently Asked Questions.</h1>
              </div>
              <div className="mt-12">
                <CustomizedAccordions />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
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
