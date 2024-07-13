import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        padding : "0px 20px",
        backgroundColor : "#264653",
        color : "white"
    }}>
        <div>
            <h2>Courses</h2>
        </div>
        <div style={{
            display : "flex",
            alignItems : "center",
            gap : "10px"

        }}>
            <Button variant="contained" onClick={()=>navigate("/signup")}>Signup</Button>
            <Button variant="contained" onClick={() => navigate("/signin")}>Signin</Button>
        </div>
    </div>
  )
}

export default Appbar