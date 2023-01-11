import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Dashboard from "../pages/Dashboard";
import Appointment from "../pages/Appointment";
import BookAppointment from "../pages/Book-Appointment";
import ConfirmAppointment from "../pages/Confirm-Appointment";
// BASIC URLS
export const URL_HOME = "/";
export const URL_LOGIN = "/login";
export const URL_SIGNUP = "/signup";
export const URL_PAYMENT = "/payment";
export const URL_DASHBOARD = "/dashboard";
export const URL_APPOINTMENT = "/appointment";
export const URL_BOOK_APPOINTMENT = "/appointment/book";
export const URL_CONFIRM_APPOINTMENT = "/appointment/confirm";

export const OPEN_ROUTES = [
  {
    path: URL_HOME,
    element: <Home />,
  },
  {
    path: URL_PAYMENT,
    element: <Payment />,
  },
  {
    path: URL_DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: URL_APPOINTMENT,
    element: <Appointment />,
  },
  {
    path: URL_BOOK_APPOINTMENT,
    element: <BookAppointment />,
  },
  {
    path: URL_CONFIRM_APPOINTMENT,
    element: <ConfirmAppointment />,
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
