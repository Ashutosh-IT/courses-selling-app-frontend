import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {

  const [courses,setCourses] = useState([]);
  const navigate = useNavigate();

  const getCourses = async()=>{
    const res = await fetch("http://localhost:3000/admin/courses",{
      method : "GET",
      headers:{
        "Content-type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("token")
      }
    });

    if(res.status !== 200){
      navigate('/signin')
      return;
    }

    const data = await res.json();
    setCourses(data);
  }

  useEffect(()=>{
    getCourses();
  },[]);

  if(!courses) return <></>

  return (
    <div style={{padding:"20px"}}>
      <Grid container rowSpacing={2} columnSpacing={{ lg: 5, xs:2 }}>
        {
          courses.map((item,index)=>{
            return <Grid key={index} item lg={3} md={4} sm={6}> 
            <CourseCard course={item}/>
            </Grid>
          })
        }
      </Grid>
    </div>
  );
};

const CourseCard = ({course}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="banner"
        image={course.imageLink}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h6" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
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
          Price : {course.price}
        </Typography>
      </div>
    </Card>
  );
};

export default Courses;
