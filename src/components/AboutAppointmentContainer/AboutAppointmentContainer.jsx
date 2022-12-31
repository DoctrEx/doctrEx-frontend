import React from "react"
import { Container, Grid, Button } from "@mui/material"

export const AboutAppointmentContainer = ({
  topic,
  mainHeading1,
  mainHeading2,
  para1,
  para2,
  btnText,
  checkPoints,
}) => {
  return (
    <div>
      <p className="text-primary text-[1.5rem] font-semibold">{topic}</p>
      <h1 className="text-4xl md:text-5xl mt-5">
        {mainHeading1} <span className="inline md:block md:mt-4">{mainHeading2}</span>
      </h1>
      <p className="mt-8 text-gray-500 dark:text-white">{para1}</p>
      <p className="mt-4 text-gray-500 dark:text-white">{para2}</p>
      <div className="mt-10 mb-8">
        {checkPoints.map((item) => (
          <div className="flex items-center space-x-2 mt-4">
            {" "}
            <i class="fa-solid fa-circle-check text-primary text-[1.1rem]"></i>
            <p className="font-semibold text-gray-600 dark:text-white">{item.description}</p>
          </div>
        ))}
      </div>
      <Button variant="contained" size="large" className="rounded-lg">
        {btnText}
      </Button>
    </div>
  )
}
