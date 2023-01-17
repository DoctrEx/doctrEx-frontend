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
import { Link, useNavigate } from "react-router-dom";
import { URL_SIGNUP, URL_HOME } from "../router/routes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { isEmail } from "../utils/helper";
import axios from "axios";

const Login = () => {
  // reactive variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  // login handler
  const loginHandler = (event) => {
    event.preventDefault();
    if (!isEmail(email)) {
      setIsError(true);
      return;
    }
    alert(JSON.stringify({ email, password }));
    const values = { email, password };
    alert(JSON.stringify({ email, password }));
    console.log(values);
    axios
      .post(`http://127.0.0.1:8000/api/auth/signin`, values)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("roleId", res.data.roleId);
        localStorage.setItem("name", res.data.name);
        alert(res.data.message);
        const id = localStorage.getItem("id");
        console.log(id);
        if (res.data.accessToken) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <Grid container className="h-screen">
      <Grid item xs={12} md={6}>
        <div className="flex justify-center flex-col items-center h-full">
          <div className="p-5 w-full absolute top-0 left-0">
            <Link to={URL_HOME} className="link block">
              <IconButton className="border border-solid border-gray-300">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </div>
          <div className="w-3/4 p-5">
            <div className="mb-10">
              <h1 className="m-0 p-0 text-4xl mb-2 text-gray-800">
                Welcome Back!
              </h1>
              <p className="text-[1.1rem] md:text-md text-gray-500">
                Please enter your credentials to login.
              </p>
            </div>
            <form method="POST" onSubmit={loginHandler} className="mt-5">
              <div className="my-5">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <TextField
                  required
                  id="email"
                  variant="outlined"
                  fullWidth
                  error={isError}
                  helperText={isError ? "Please enter valid email address" : ""}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-5">
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <OutlinedInput
                  fullWidth
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              </div>
              <div className="my-5">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className="py-3"
                >
                  Login
                </Button>
              </div>
              <div className="my-2 text-center">
                <p className="text-gray-500 text-sm">
                  Don't have an account?{" "}
                  <Link className="link" to={URL_SIGNUP}>
                    <span className="font-semibold">Sign up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className="hidden md:block">
        <div className="h-full flex justify-center">
          <img
            src="/assets/nurse.jpg"
            alt="doctor"
            className="w-full h-full object-cover"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
