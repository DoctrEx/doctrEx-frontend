import React from "react"
import { ServiceCard } from "../ServiceCard/ServiceCard"
import { SERVICES } from "../../utils/constants"
import { Container, Grid } from "@mui/material"

export const Services = () => {
  return (
    <Container>
      <div className="pt-20 md:pt-32 px-20 md:px-5">
        <p className="text-primary text-center text-[1.5rem] font-semibold">Hassle free solution</p>
        <h1 className="text-center text-4xl md:text-5xl mt-5">Easy steps for your solution.</h1>
        <Grid container className="mt-1 md:mt-10" spacing={2}>
          {SERVICES.map((service) => (
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </div>
    </Container>
  )
}
