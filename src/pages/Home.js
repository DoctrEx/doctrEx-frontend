import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "@mui/material/Button"

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        {" "}
        <Button variant="outlined" className="m-5">
          contained button
        </Button>
        <h1 className="">Hello world</h1>
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis eos reprehenderit,
          voluptate porro accusantium magnam corrupti recusandae nesciunt ut quas expedita atque
          dicta consectetur veritatis itaque dignissimos totam? Veniam, doloribus.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Home
