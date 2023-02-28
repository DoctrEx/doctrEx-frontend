import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import Payment from "../pages/Payment";
import Dashboard from "../pages/Dashboard";
import Appointment from "../pages/Appointment";
import BookAppointment from "../pages/Book-Appointment";
import ConfirmAppointment from "../pages/Confirm-Appointment";
import ChatMessage from "../components/Chat/Chat";
// import Nearme from "../pages/Nearme";
import Protected from "./protected";
import GoogleMaps from "../pages/Map";
console.log("pain");
// BASIC URLS
export const URL_HOME = "/";
export const URL_LOGIN = "/login";
export const URL_LOGOUT = "/logout";
export const URL_SIGNUP = "/signup";
export const URL_MAP = "/map";
export const URL_PAYMENT = "/payment";
export const URL_CHAT = "/chat";
export const URL_DASHBOARD = "/dashboard";
export const URL_APPOINTMENT = "/appointment";
export const URL_BOOK_APPOINTMENT = "/appointment/book";
export const URL_CONFIRM_APPOINTMENT = "/appointment/confirm/:id";

export const OPEN_ROUTES = [
  {
    path: URL_HOME,
    element: <Home />,
  },
  // {
  //   path: URL_MAP,
  //   element: <MapComponent />,
  // },
  {
    path: URL_SIGNUP,
    element: <Signup />,
  },
  {
    path: URL_LOGIN,
    element: <Login />,
  },
  {
    path: URL_MAP,
    element: (
      <Protected>
        <GoogleMaps />
      </Protected>
    ),
  },
  {
    path: URL_LOGOUT,
    element: (
      <Protected>
        <Logout />,
      </Protected>
    ),
  },
  {
    path: URL_PAYMENT,
    element: (
      <Protected>
        <Payment />
      </Protected>
    ),
  },
  {
    path: URL_DASHBOARD,

    element: (
      <Protected>
        <Dashboard />,
      </Protected>
    ),
  },

  {
    path: URL_APPOINTMENT,
    element: (
      <Protected>
        <Appointment />,
      </Protected>
    ),
  },
  {
    path: URL_CHAT,
    element: <ChatMessage />,
  },
  {
    path: URL_BOOK_APPOINTMENT,

    element: (
      <Protected>
        <BookAppointment />,
      </Protected>
    ),
  },
  {
    path: URL_CONFIRM_APPOINTMENT,
    element: (
      <Protected>
        <ConfirmAppointment />,
      </Protected>
    ),
  },
  {
    path: URL_LOGIN,
    element: <h1>Login Page</h1>,
  },
  {
    path: URL_SIGNUP,
    element: <h1>Sign Up page</h1>,
  },
];
