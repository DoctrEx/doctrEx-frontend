import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

// BASIC URLS
export const URL_HOME = "/"
export const URL_LOGIN = "/login"
export const URL_SIGNUP = "/signup"

export const OPEN_ROUTES = [
  {
    path: URL_HOME,
    element: <Home />,
  },
  {
    path: URL_SIGNUP,
    element: <Signup />
  },
  {
    path: URL_LOGIN,
    element: <Login />
  }
]
