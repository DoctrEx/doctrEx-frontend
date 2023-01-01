import * as React from "react"
import { styled } from "@mui/material/styles"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square={false} {...props} />
))(({ theme }) => ({
  borderBottom: theme.palette.mode === "dark" ? "3px solid #374151" : "3px solid #E5EFFB",
  boxShadow: "none",
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#171717" : "#FFFFFF",
  padding: "1rem 0rem .7rem 0rem",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: theme.palette.mode === "dark" ? "1px solid #374151" : "1px solid #E5EFFB",
  borderTop: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#171717" : "#FFFFFF",
  padding: "0 0 15px 9px",
  marginTop: "0",
}))

export function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={
            expanded === "panel1" ? (
              <RemoveCircleIcon className="text-3xl text-primary" />
            ) : (
              <AddCircleIcon className="text-3xl text-primary" />
            )
          }
        >
          <Typography className="font-bold text-xl">What does telemedicine mean?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-500 dark:text-gray-300">
            Telehealth is the distribution of health-related services and information via electronic
            information and telecommunication technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expandIcon={
            expanded === "panel2" ? (
              <RemoveCircleIcon className="text-3xl text-primary" />
            ) : (
              <AddCircleIcon className="text-3xl text-primary" />
            )
          }
        >
          <Typography className="font-bold text-xl">What is telemedicine used for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-500 dark:text-gray-300">
            Telemedicine, which enables video or phone appointments between a patient and their
            health care practitioner, benefits both health and convenience. More health care
            providers are offering to “see” patients by computer and smartphone.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expandIcon={
            expanded === "panel3" ? (
              <RemoveCircleIcon className="text-3xl text-primary" />
            ) : (
              <AddCircleIcon className="text-3xl text-primary" />
            )
          }
        >
          <Typography className="font-bold text-xl">
            What equipment do you require for telemedicine?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-500 dark:text-gray-300">
            Telemedicine equipment kits often look like a sturdy briefcase or large medical kit.
            Inside, these kits may include a small computer with an integrated screen, a camera, and
            simple mobile medical devices.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          expandIcon={
            expanded === "panel4" ? (
              <RemoveCircleIcon className="text-3xl text-primary" />
            ) : (
              <AddCircleIcon className="text-3xl text-primary" />
            )
          }
        >
          <Typography className="font-bold text-xl">
            What are the pros or advantages of telemedicine?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-500 dark:text-gray-300">
            With telemedicine, you don't have to drive to the doctor's office or clinic, park, walk
            or sit in a waiting room when you're sick. You can see your doctor from the comfort of
            your own bed or sofa. Virtual visits can be easier to fit into your busy schedule.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
