import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Grid, Container } from "@mui/material"

const Home = () => {
  return (
    <>
    <Header />
    <Container>
      <h1 className="text-primary">Landing Page</h1>
      <Button variant="contained">Login button</Button>
      <Footer />

      <Grid container>
        <Grid item xs={12} md={6}>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate cum optio nulla.
            Possimus nobis ratione totam molestiae eius, asperiores ab labore voluptatibus
            reprehenderit. Error, adipisci est? Ipsa eligendi cumque veritatis quis asperiores ad,
            officiis nostrum debitis dignissimos reprehenderit voluptatum natus modi ullam, dicta
            magnam aut sequi eos pariatur officia. Eos!
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="hidden md:block">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eius nulla praesentium, eveniet dignissimos cumque consequuntur ratione obcaecati, dicta beatae nemo blanditiis doloribus fuga, non quaerat. Sunt numquam natus totam?
          </div>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Home
