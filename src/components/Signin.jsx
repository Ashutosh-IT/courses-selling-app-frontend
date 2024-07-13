import React from 'react'
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';

const Signin = () => {
  return (
    <div style={{
        display : "flex",
        flexDirection : "column",
        width : "full",
        alignItems : "center",
        justifyContent : "center",
        height : "600px"
    }}>
        <p>Welcome back! Sign In Below</p>
        <Paper elevation={3} sx={{
            width :"250px",
            padding : "40px 20px",
        }}>
            <div style={{
                display : "flex",
                flexDirection :"column",
                gap : "20px"
            }}>
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="password" label="Password" variant="outlined" />
            </div>
            <Button variant="contained" sx={{
                marginTop : "30px"
            }}>Login</Button>
        </Paper>
    </div>
  )
}

export default Signin