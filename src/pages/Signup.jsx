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
// import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CHRONICAL_DISEASES } from "../utils/constants";
import { getStyles } from "../utils/helper";
import { isEmail } from "../utils/helper";
import { FormHelperText } from "@mui/material";
import { SPECIALITIES } from "../utils/constants";
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Signup = () => {
  // theme and other reactive vars
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isPatient, setIsPatient] = useState(true);
  // state vars for controlled i/p
  const [name, setName] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });
  const [country, setCountry] = useState({ value: "", error: false });
  const [address, setAddress] = useState({ value: "", error: false });
  const [date, setDate] = useState({ value: "", error: false });
  const [chronicalDiseases, setChronicalDiseases] = useState({
    value: [],
    error: false,
  });
  const [speciality, setSpeciality] = useState({ value: [], error: false });
  const [specialityLevel, setSpecialityLevel] = useState({
    value: "",
    error: false,
  });
  const [role, setRole] = useState("patient");

  // Chronical Diseases Handler
  const chronicalDiseasesHandler = (event) => {
    const {
      target: { value },
    } = event;
    setChronicalDiseases((prevChronicalDiseasesObj) => ({
      ...prevChronicalDiseasesObj,
      value: typeof value === "string" ? value.split(",") : value,
    }));
  };

  // Speciality Handler
  const specialityHandler = (event) => {
    const {
      target: { value },
    } = event;
    setSpeciality((prevSpecialityObj) => ({
      ...prevSpecialityObj,
      value: typeof value === "string" ? value.split(",") : value,
    }));
  };

  // Signup Handler
  const signupHandler = (event) => {
    event.preventDefault();
    if (
      !isEmail(email.value) ||
      !name.value ||
      !password.value ||
      !address.value ||
      !country.value ||
      (!chronicalDiseases.value.length && isPatient) ||
      (!speciality.value.length && !isPatient) ||
      (!specialityLevel.value && !isPatient)
    ) {
      !isEmail(email.value) &&
        setEmail((prevEmailObj) => ({ ...prevEmailObj, error: true }));
      !name.value &&
        setName((prevNameObj) => ({ ...prevNameObj, error: true }));
      !password.value &&
        setPassword((prevPasswordObj) => ({ ...prevPasswordObj, error: true }));
      !address.value &&
        setAddress((prevAddressObj) => ({ ...prevAddressObj, error: true }));
      !country.value &&
        setCountry((prevCountryObj) => ({ ...prevCountryObj, error: true }));
      !chronicalDiseases.value.length &&
        setChronicalDiseases((prevChronicalDiseasesObj) => ({
          ...prevChronicalDiseasesObj,
          error: true,
        }));
      !speciality.value.length &&
        setSpeciality((prevSpecialityObj) => ({
          ...prevSpecialityObj,
          error: true,
        }));
      !specialityLevel &&
        setSpecialityLevel((prevSpecialityLevelObj) => ({
          ...prevSpecialityLevelObj,
          error: true,
        }));
      return;
    }
    const values = {
      name: name.value,
      email: email.value,
      password: password.value,
      country: country.value,
      address: address.value,
      dateOfBirth: date.value,
      chronicalDiseases: isPatient ? chronicalDiseases.toString() : null,
      speciality: !isPatient ? speciality.value : null,
      specialityLevel: !isPatient ? specialityLevel.value : null,
      role: isPatient ? "patient" : "doctor",
    };
    console.log(values);
    axios
      .post(`http://127.0.0.1:8000/api/auth/signup`, values)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <Grid container className="h-screen flex justify-center">
      <Grid item xs={12} md={6}>
        <div className="flex justify-center flex-col items-center h-full">
          <div className="p-5 absolute top-0 right-0">
            {/* Switch Button  */}
            <Button
              variant="contained"
              onClick={() => setIsPatient((prevState) => !prevState)}
            >
              Register as {isPatient ? "Doctor" : "Patient"}
            </Button>
          </div>
          {/* Back button  */}
          <div className="p-5 absolute top-0 left-0">
            <Link to={URL_HOME} className="link block">
              <IconButton className="border border-solid border-gray-300">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </div>

          {/* Whole form  */}
          <div className="w-3/4 p-5 mt-8">
            <div className="mb-10">
              <h1 className="m-0 p-0 text-4xl mb-2 text-gray-800 text-center">
                Create your account.
              </h1>
              <p className="text-[1.1rem] md:text-md text-gray-500 text-center">
                Please enter your credentials to register yourself.
              </p>
            </div>
            <form method="POST" onSubmit={signupHandler} className="mt-5">
              {/* Name and Email Container */}
              <div className="flex space-x-4 my-5">
                {/* Name field  */}
                <div className="w-1/2">
                  <label htmlFor="name" className="mb-2">
                    Name
                  </label>
                  <TextField
                    error={name.error}
                    helperText={name.error ? "Name cannot be empty" : ""}
                    value={name.value}
                    onChange={(e) =>
                      setName((prevNameObj) => ({
                        ...prevNameObj,
                        value: e.target.value,
                      }))
                    }
                    id="name"
                    variant="outlined"
                    fullWidth
                  />
                </div>

                {/* Email field  */}
                <div className="w-1/2">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <TextField
                    error={email.error}
                    helperText={
                      email.error ? "Please enter valid email address" : ""
                    }
                    id="email"
                    variant="outlined"
                    fullWidth
                    value={email.value}
                    onChange={(e) =>
                      setEmail((prevEmailObj) => ({
                        ...prevEmailObj,
                        value: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Password and DoB Container  */}
              <div className="flex space-x-4 my-5">
                {/* Password field */}
                <FormControl className="w-1/2">
                  <label htmlFor="password" className="mb-2">
                    Password
                  </label>
                  <OutlinedInput
                    error={password.error}
                    fullWidth
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password.value}
                    onChange={(e) =>
                      setPassword((prevPasswordObj) => ({
                        ...prevPasswordObj,
                        value: e.target.value,
                      }))
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {!!password.error && (
                    <FormHelperText error id="accountId-error">
                      Password cannot be empty
                    </FormHelperText>
                  )}
                </FormControl>

                {/* doB field */}
                <div className="w-1/2">
                  <label htmlFor="dob" className="mb-2">
                    Date of Birth
                  </label>

                  <LocalizationProvider dateAdapter={AdapterDayjs} className="">
                    <DesktopDatePicker
                      inputFormat="MM/DD/YYYY"
                      value={date}
                      onChange={(newDate) => setDate(newDate)}
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
                    error={country.error}
                    helperText={country.error ? "Country cannot be empty" : ""}
                    value={country.value}
                    onChange={(e) =>
                      setCountry((prevCountryObj) => ({
                        ...prevCountryObj,
                        value: e.target.value,
                      }))
                    }
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
                    error={address.error}
                    helperText={address.error ? "Address cannot be empty" : ""}
                    value={address.value}
                    onChange={(e) =>
                      setAddress((prevAddressObj) => ({
                        ...prevAddressObj,
                        value: e.target.value,
                      }))
                    }
                    id="address"
                    variant="outlined"
                    fullWidth
                    type="address"
                  />
                </div>
              </div>

              {/* Chronical diseases container --> (FOR PATIENTS ONLY)  */}
              <div
                className={`space-x-4 my-5 ${isPatient ? "flex" : "hidden"}`}
              >
                {/* Chronical diseases field  */}
                <div className="w-full">
                  <label htmlFor="chronicalDiseases" className="mb-2">
                    Chronical Diseases
                  </label>
                  <FormControl className="w-full">
                    <Select
                      error={chronicalDiseases.error}
                      id="chronicalDiseases"
                      multiple
                      value={chronicalDiseases.value}
                      onChange={chronicalDiseasesHandler}
                      input={<OutlinedInput id="chronicalDiseases" />}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              className="bg-primary text-white"
                            />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {CHRONICAL_DISEASES.map((disease) => (
                        <MenuItem
                          key={disease}
                          value={disease}
                          style={getStyles(
                            disease,
                            chronicalDiseases.value,
                            theme
                          )}
                        >
                          {disease}
                        </MenuItem>
                      ))}
                    </Select>
                    {chronicalDiseases.error && (
                      <FormHelperText error id="accountId-error">
                        Chronical Diseases cannot be empty
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>
              </div>

              {/* Speciality and speciality level Container --> (FOR DOCTORS ONLY)  */}
              <div
                className={`space-x-4 my-5 ${isPatient ? "hidden" : "flex"}`}
              >
                {/* Speciality field  */}

                <div className="w-1/2">
                  <label htmlFor="speciality" className="mb-2">
                    Speciality
                  </label>
                  <FormControl className="w-full">
                    <Select
                      error={speciality.error}
                      id="speciality"
                      multiple
                      value={speciality.value}
                      onChange={specialityHandler}
                      input={<OutlinedInput id="speciality" />}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              className="bg-primary text-white"
                            />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {SPECIALITIES.map((specialityName) => (
                        <MenuItem
                          key={specialityName}
                          value={specialityName}
                          style={getStyles(
                            specialityName,
                            speciality.value,
                            theme
                          )}
                        >
                          {specialityName}
                        </MenuItem>
                      ))}
                    </Select>
                    {speciality.error && (
                      <FormHelperText error id="accountId-error">
                        Speciality cannot be empty
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                {/* Speciality Level Field  */}
                <div className="w-1/2">
                  <label htmlFor="Speciality Level" className="mb-2">
                    Speciality Level
                  </label>
                  <TextField
                    error={specialityLevel.error}
                    helperText={
                      specialityLevel.error
                        ? "Speciality Level cannot be empty"
                        : ""
                    }
                    id="Speciality Level"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={specialityLevel.value}
                    onChange={(e) =>
                      setSpecialityLevel((prevSpecialityLevelObj) => ({
                        ...prevSpecialityLevelObj,
                        value: e.target.value,
                      }))
                    }
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
    </Grid>
  );
};

export default Signup;
