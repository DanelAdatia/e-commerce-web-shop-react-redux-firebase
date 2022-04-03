import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { TextField, Typography, Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const auth = getAuth();
  const SignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(result);
      toast.success("registration success");
    } catch (error) {
      console.log(error);
      toast.error("registration failed", {
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
        <Grid item xs={8}>
          <div className="mt-5 pt-5">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_57TxAX.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </Grid>
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
            <Typography className="title" component="h1" variant="h5">
              Sign Up
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
            <TextField
              name="cpassword"
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              className="pr-4"
              color="warning"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              focus
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
              onClick={SignUp}
            >
              Sign Up
            </Button>
            <div style={{ marginLeft: "100px" }}>
              <Link to="/signin">
                Already have an account? Click here to Sign In
              </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
