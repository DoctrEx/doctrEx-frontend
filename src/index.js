import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import App from "./App"
import { StyledEngineProvider } from "@mui/material/styles"
import { store } from "./redux/store/store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StyledEngineProvider>
)
