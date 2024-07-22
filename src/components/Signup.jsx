import React from "react";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { useNavigate } from "react-router-dom";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading";

const Signup = () => {

  const email = useRef();
  const password = useRef();

  const userEmail = useRecoilValue(userEmailState);
  const isLoading = useRecoilValue(isUserLoading);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  if(!isLoading && userEmail) navigate('/courses');

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleClick = async () => {
    if (email.current.value === "" || password.current.value === "") {
      return;
    }

    const res = await fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      body: JSON.stringify({
        username: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);

    if (res.status === 201) {
      setUser({
        isLoading : false,
        userEmail : email.current.value
      });
      email.current.value = "";
      password.current.value = "";
      notifySuccess(data.message);
      navigate('/courses');
    } else notifyError(data.message);
  };

  return (
    !isLoading ?
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "full",
        alignItems: "center",
        justifyContent: "center",
        height: "600px",
      }}
    >
      <p>New Here! Sign up Below</p>
      <Paper
        elevation={3}
        sx={{
          width: "250px",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            inputRef={email}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            inputRef={password}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
          }}
          onClick={handleClick}
        >
          Register
        </Button>
      </Paper>
    </div> : <></>
  );
};

export default Signup;
