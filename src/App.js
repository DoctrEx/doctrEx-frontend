import { CssBaseline } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { Router } from "./router/router"
import {ThemeProvider} from '@mui/material'
import { LIGHTTHEME, DARKTHEME } from './styles/MuiTheme'

function App() {
  return (
    <ThemeProvider theme={DARKTHEME}>
      <CssBaseline />
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
