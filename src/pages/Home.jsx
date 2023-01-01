import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Button, Grid, Container } from "@mui/material"
import { Services } from "../components/Services"
import { About } from "../components/About"
import { DoctorContainer } from "../components/DoctorContainer"
import { BookAppointment } from "../components/BookAppointment"
import { Testimonial } from "../components/Testimonial"
import { FAQ } from "../components/FAQ"

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
        <Services />
        <About />
        <DoctorContainer />
        <BookAppointment />
        <Testimonial />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
