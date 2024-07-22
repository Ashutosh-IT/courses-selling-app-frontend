import React, { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";

const AddCourses = () => {

  const userEmail = useRecoilValue(userEmailState);
  const navigate = useNavigate();

  const title = useRef();
  const description = useRef();
  const imgURL = useRef();
  const price = useRef();

  const check = () => {
    if (!userEmail) {
      navigate("/signin");
      return;
    }
  };

  useEffect(() => {
    check();
  });

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleClick = async () => {
    if (
      title.current.value === "" ||
      imgURL.current.value === "" ||
      description.current.value === "" ||
      price.current.value === ""
    ) {
      notifyError("All fields are Mandatory");
      return;
    }

    const res = await fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value,
        description: description.current.value,
        imageLink: imgURL.current.value,
        price: price.current.value,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await res.json();

    title.current.value = "";
    description.current.value = "";
    imgURL.current.value = "";
    price.current.value = "";

    if (res.status === 201) {
      notifySuccess(data.message);
      navigate("/courses");
    } else notifyError("Something Error Occurred");
  };


  return (
    userEmail &&
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
      <p>Add New Course Here!</p>
      <Paper
        elevation={3}
        sx={{
          width: "300px",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            inputRef={title}
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            inputRef={description}
          />
          <TextField
            id="imageurl"
            label="Image URL"
            variant="outlined"
            inputRef={imgURL}
          />
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            inputRef={price}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
          }}
          onClick={handleClick}
        >
          Add Course
        </Button>
      </Paper>
    </div>
  );
};

export default AddCourses;
