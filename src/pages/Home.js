import React from "react"
import { Header } from "../components/Header/"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Button, Grid, Container } from "@mui/material"

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default Home
