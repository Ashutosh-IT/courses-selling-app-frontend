import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Courses = () => {
  return (
    <div style={{padding:"20px"}}>
      <Grid container rowSpacing={2} columnSpacing={{ lg: 5, xs:2 }}>
        <Grid item lg={3} md={4} sm={6}> 
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
            <CourseCard/>
        </Grid>
      </Grid>
    </div>
  );
};

const CourseCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="banner"
        image="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h6" component="div">
          Cat Course
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cat are good animals, they like pizas Lorem ipsum dolor sit
        </Typography>
      </CardContent>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px 0 15px",
          marginBottom : "20px"
        }}
      >
        <Button variant="contained">Edit</Button>
        <Typography variant="text" component="div">
          Price : 5999
        </Typography>
      </div>
    </Card>
  );
};

export default Courses;
