import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user.js";
import {userEmailState} from "../store/selectors/userEmail.js"
import { isUserLoading } from "../store/selectors/isUserLoading.js";

const Appbar = () => {

  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);

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
          {!userLoading ? (userEmail ? <UserLoggedIn/> : <NotLoggedIn/>) : <></>}
        </div>
      </div>
    );


};

const UserLoggedIn = () => {

  const setUserEmail = useSetRecoilState(userState);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("token", "");
    setUserEmail({
      isLoading : false,
      userEmail : null
    });
    navigate("/signin");
  };

  return (
    <>
    <Button
    variant="text"
    sx={{ color: "white" }}
    onClick={() => navigate("/courses")}
  >
    Courses
  </Button>


  <Button
    variant="text"
    sx={{ color: "white" }}
    onClick={() => navigate("/addcourses")}
  >
    Add
  </Button>


  <Button variant="contained" onClick={handleClick}>
    Logout
  </Button>
    </>
  );
}

const NotLoggedIn = () => {
  const navigate = useNavigate();
  return (
    <>
    <Button variant="contained" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        
        
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Signin
          </Button>
    </>
  );
} 

export default Appbar;
