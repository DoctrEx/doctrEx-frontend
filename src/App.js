import { CssBaseline } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { Router } from "./router/router"

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={Router} />
    </>
  )
}

export default App
