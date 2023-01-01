import React from "react"
import { Container, Grid, Avatar } from "@mui/material"
import { PATIENT_TESTIMONIALS } from "../../utils/constants"

export const Testimonial = () => {
  const [personIndex, setPersonIndex] = React.useState(0)
  return (
    <Container>
      <div className="pt-24 md:pt-32">
        <div className="flex justify-start py-2 px-10 md:py-5 md:px-0">
          <div>
            <p className="text-primary text-[1.5rem] font-semibold">Happy Patients</p>
            <h1 className="text-4xl md:text-5xl mt-5">
              Reviews From Our <span className="inline md:block md:mt-4">Patients.</span>
            </h1>
          </div>
        </div>
        <div className="mt-6 md:mt-4 py-2 px-10 md:py-5 md:px-0">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <div>
                {PATIENT_TESTIMONIALS.map((patient, index) => (
                  <div
                    key={`${patient.name}-${index}`}
                    className={`flex border border-solid border-gray-300 dark:border-gray-700 rounded-2xl p-4 px-8 space-x-4 items-center hoverable ${
                      index !== 0 ? "mt-4" : ""
                    } ${index === personIndex ? "bg-primary text-primaryLight" : ""}`}
                    onClick={() => setPersonIndex(index)}
                  >
                    <div>
                      <Avatar src={patient.avatar} alt="person" className="w-20 h-20" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">{patient.name}</p>
                      <p className={`${index === personIndex ? "text-gray-50" : "text-gray-500"}`}>
                        Happy Patient
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Grid>

            <Grid item xs={12} md={7}>
              <div className="flex justify-start p-8 md:p-8 md:pt-4 border border-solid border-gray-100 shadow-lg rounded-2xl">
                <div>
                  <div className="mt-4 flex justify-between">
                    <p className="font-bold text-2xl">
                      {PATIENT_TESTIMONIALS[personIndex].tagline}
                    </p>
                    <img src="/assets/quote.png" alt="quote" className="w-10 h-10" />
                  </div>
                  <span className="flex space-x-1 mt-2">
                    {Array(5)
                      .fill(0)
                      .map((_) => (
                        <i class="fa-solid fa-star text-yellow-500 text-[1.1rem]"></i>
                      ))}
                  </span>
                  <div className="mt-8">
                    <p className="text-gray-500 dark:text-white">
                      {PATIENT_TESTIMONIALS[personIndex].testimonial_1}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 dark:text-white">
                      {PATIENT_TESTIMONIALS[personIndex].testimonial_2}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
}
