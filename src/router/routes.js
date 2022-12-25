import Home from "../pages/Home"

// BASIC URLS
export const URL_HOME = "/"

export const OPEN_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <h1>Sign Up page</h1>
  },
  {
    path: "/login",
    element: <h1>Login Page</h1>
  }
]
