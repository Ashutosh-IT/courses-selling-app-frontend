import React, { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail.js";
import { isUserLoading } from "../store/selectors/isUserLoading.js";

const Signin = () => {

  const email = useRef();
  const password = useRef();

  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const isLoading = useRecoilValue(isUserLoading);

  useEffect(()=>{
    if(!isLoading && userEmail) navigate('/courses');
  },[userEmail]);

  
  

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleClick = async () => {
    if (email.current.value === "" || password.current.value === "") {
      return;
    }

    const res = await fetch("http://localhost:3000/admin/login", {
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

    if (res.status === 200) {
      setUser({
        isLoading : false,
        userEmail : email.current.value
      });
      email.current.value = "";
      password.current.value = "";
      notifySuccess(data.message);
      navigate("/courses");
    } else notifyError(data.message);
  };

  return (
    !isLoading && !userEmail?
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
      <p>Welcome back! Sign In Below</p>
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
          Login
        </Button>
      </Paper>
    </div> : <></>
  );
};

export default Signin;
