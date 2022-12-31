import React from "react"
import { Header } from "../components/Header/"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Button, Grid, Container } from "@mui/material"
import { Services } from "../components/Services/"
import { About } from "../components/About"
import { DoctorContainer } from "../components/DoctorContainer/"

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <Services />
        <About />
        <DoctorContainer />
      </main>
    </div>
  )
}

export default Home
