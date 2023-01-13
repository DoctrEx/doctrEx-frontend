import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { URL_LOGIN, URL_HOME } from "../router/routes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = React.useState(dayjs("2000-01-18T21:11:54"));
  const [isPatient, setIsPatient] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container className="h-screen flex justify-center">
      <Grid item xs={12} md={6}>
        <div className="flex justify-center flex-col items-center h-full">
          {/* Back button  */}
          <div className="p-5 w-full absolute top-0 left-0">
            <Link to={URL_HOME} className="link block">
              <IconButton className="border border-solid border-gray-300">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </div>
          <div className="w-full flex justify-end">
            {/* Switch Button  */}
            <div className="p-5">
              <Button
                variant="contained"
                onClick={() => setIsPatient((prevState) => !prevState)}
              >
                Register as {isPatient ? "Doctor" : "Patient"}
              </Button>
            </div>
          </div>

          <div className="w-3/4 p-5">
            <div className="mb-10">
              <h1 className="m-0 p-0 text-4xl mb-2 text-gray-800 text-center">
                Create your account.
              </h1>
              <p className="text-[1.1rem] md:text-md text-gray-500 text-center">
                Please enter your credentials to register yourself.
              </p>
            </div>
            <form action="" method="POST" className="mt-5">
              {/* Name and Email Container */}
              <div className="flex space-x-4 my-5">
                {/* Name field  */}
                <div className="w-1/2">
                  <label htmlFor="name" className="mb-2">
                    Name
                  </label>
                  <TextField required id="name" variant="outlined" fullWidth />
                </div>

                {/* Email field  */}
                <div className="w-1/2">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <TextField
                    required
                    id="email"
                    variant="outlined"
                    fullWidth
                    type="email"
                  />
                </div>
              </div>

              {/* Password and DoB Container  */}
              <div className="flex space-x-4 my-5">
                {/* Password field */}
                <div className="w-1/2">
                  <label htmlFor="password" className="mb-2">
                    Password
                  </label>
                  <OutlinedInput
                    fullWidth
                    id="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>

                {/* doB field */}
                <div className="w-1/2">
                  <label htmlFor="dob" className="mb-2">
                    Date of Birth
                  </label>

                  <LocalizationProvider dateAdapter={AdapterDayjs} className="">
                    <DesktopDatePicker
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>

              {/* Country and address container  */}
              <div className="flex space-x-4 my-5">
                {/* Country field  */}
                <div className="w-1/2">
                  <label htmlFor="country" className="mb-2">
                    Country
                  </label>
                  <TextField
                    required
                    id="country"
                    variant="outlined"
                    fullWidth
                  />
                </div>

                {/* Address Field  */}
                <div className="w-1/2">
                  <label htmlFor="address" className="mb-2">
                    Address
                  </label>
                  <TextField
                    required
                    id="address"
                    variant="outlined"
                    fullWidth
                    type="address"
                  />
                </div>
              </div>

              {/* Chronical diseases container  */}
              <div
                className={`space-x-4 my-5 ${isPatient ? "flex" : "hidden"}`}
              >
                {/* Chronical diseases field  */}
                <div className="w-full">
                  <label htmlFor="chronicalDiseases" className="mb-2">
                    Chronical Diseases
                  </label>
                  <TextField
                    required
                    id="chronicalDiseases"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>

              {/* Speciality and speciality level Container  */}
              <div
                className={`space-x-4 my-5 ${isPatient ? "hidden" : "flex"}`}
              >
                {/* Speciality field  */}
                <div className="w-1/2">
                  <label htmlFor="speciality" className="mb-2">
                    Speciality
                  </label>
                  <TextField
                    required
                    id="speciality"
                    variant="outlined"
                    fullWidth
                  />
                </div>

                {/* Speciality Level Field  */}
                <div className="w-1/2">
                  <label htmlFor="Speciality Level" className="mb-2">
                    Speciality Level
                  </label>
                  <TextField
                    required
                    id="Speciality Level"
                    variant="outlined"
                    fullWidth
                    type="number"
                  />
                </div>
              </div>

              {/* Signup Button */}
              <div className="my-5">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className="py-3"
                >
                  Signup
                </Button>
              </div>

              {/* Login Message  */}
              <div className="my-2 text-center">
                <p className="text-gray-500 text-sm">
                  Already have an account?{" "}
                  <Link className="link" to={URL_LOGIN}>
                    <span className="font-semibold">Login</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Grid>
      {/* <Grid item xs={12} md={6} className="hidden md:block">
        <div className="h-full flex justify-center">
          <img src="/assets/nurse.jpg" alt="doctor" className="w-full h-full object-cover" />
        </div>
      </Grid> */}
    </Grid>
  );
};

export default Signup;
