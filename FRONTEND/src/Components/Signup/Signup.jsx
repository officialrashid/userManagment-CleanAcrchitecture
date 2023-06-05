import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import axios from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setPhone,
  setPassword,
  setConfirmPassword,
} from "../../redux-toolkit/registerReducers";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.register);
  console.log(body.name, ";;;;;;;;;;;;;;", body, "body coming");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called"); // Add this line
    axios.post("/api/v1/user/signup", body).then((response) => {
      console.log(response, "response in frontend");

      navigate("/home");
    });
  };
  return (
    <div>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              marginLeft: 80,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
          />
          <Typography
            variant="h1"
            component="h5"
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "blue",
              alignItems: "center",
              textAlign: "center",
              marginRight: 10,
            }}
          >
            Register
          </Typography>

          <Typography
            variant="h1"
            component="h"
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#05264e",
              alignItems: "center",
              marginTop: 2,
              marginRight: 10,
            }}
          >
            Start for free Today
          </Typography>
          <Divider sx={{ marginRight: 10 }}>Or Continue with</Divider>

          <Box
            component="form"
            noValidate
            sx={{ paddingLeft: 20 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setPhone(e.target.value))}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="confirmPassword"
              type="confirmPassword"
              id="confirmPassword"
              autoComplete="current-password"
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
            />
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 5,
                  mb: 2,
                  height: 60,
                  width: "60%",
                  backgroundColor: "#131392",
                }}
              >
                Submit&Register
              </Button>
            </Stack>
            <Grid
              container
              justifyContent="space-around"
              sx={{ marginLeft: -18 }}
            >
              <Link href="#" variant="body2">
                {"Don't have an account? Sign In"}
              </Link>
            </Grid>
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            height: 250,
            width: 350,
            maxHeight: { xs: 250, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt=""
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-3.svg"
        />
      </Container>
    </div>
  );
}
