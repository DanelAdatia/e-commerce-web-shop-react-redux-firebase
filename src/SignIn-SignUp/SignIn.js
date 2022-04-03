import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { TextField, Typography, Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const auth = getAuth();
  const Login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("Current User", JSON.stringify(result));
      console.log(result);
      window.location.href = "/";
      toast.success("Login success");
    } catch (error) {
      console.log(error);
      toast.error("Login failed", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ height: "100vh" }}
      className="signup-background"
    >
      <Grid container spacing={2} columns={16}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={8}
        >
          <Box
            style={{
              width: "500px",
            }}
            component="form"
            className="signupbox mt-5 pt-5 pl-4"
          >
            <Typography className="titleSignIn" component="h1" variant="h5">
              Sign In
            </Typography>
            <TextField
              name="email"
              focus
              fullWidth
              autoComplete="off"
              label="Email"
              type="email"
              margin="normal"
              className="pr-4"
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="password"
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              className="pr-4"
              focus
              color="success"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              style={{
                padding: "10px",
                marginTop: "2px",
                marginLeft: "185px",
                marginBottom: "5px",
                width: "80px",
                height: "40px",
                fontSize: "12px",
              }}
              variant="contained"
              color="secondary"
              onClick={Login}
            >
              Sign In
            </Button>
            <div style={{ marginLeft: "100px" }}>
              <Link to="/signup">
                Don't have an account? Click here to Sign Up
              </Link>
            </div>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <div
            style={{ width: "500px", height: "500px" }}
            className="mt-5 pt-5"
          >
            <lottie-player
              src="https://assets5.lottiefiles.com/temp/lf20_lruRTf.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
