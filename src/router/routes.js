import Home from "../pages/Home"

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
    element: <h1>Sign Up page</h1>
  },
  {
    path: URL_LOGIN,
    element: <h1>Login Page</h1>
  }
]
