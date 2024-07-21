import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user.js";

const Appbar = () => {
  const userEmail = useRecoilValue(userState);
  const setUserEmail = useSetRecoilState(userState);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("token", "");
    setUserEmail(null);
    navigate("/signin");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
        backgroundColor: "#264653",
        color: "white",
      }}
    >
      <div>
        <h2>Courses</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {!userEmail && (
          <Button variant="contained" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        )}
        {!userEmail && (
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Signin
          </Button>
        )}

        {userEmail && (
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/courses")}
          >
            Courses
          </Button>
        )}
        {userEmail && (
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/addcourses")}
          >
            Add
          </Button>
        )}
        {userEmail && (
          <Button variant="contained" onClick={handleClick}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
