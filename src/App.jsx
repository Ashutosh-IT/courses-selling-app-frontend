import React, { useEffect } from 'react'
import Appbar from './components/Appbar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user.js';

const App = () => {

  const setUser = useSetRecoilState(userState);
  
  const init = async()=>{
    
    try{
      const res = await fetch("http://localhost:3000/admin/me",{
        method : "GET",
        headers:{
          "Content-type": "application/json",
          "Authorization": "Bearer "+localStorage.getItem("token")
        }
      });

      if(res.status != 200){
        setUser({
          isLoading : false,
          userEmail : null
        });
        return;
      }

      const user = await res.json();
      if(user.username){
        setUser({
          isLoading : false,
          userEmail : user.username
        })
        return;
      }
      else{
        setUser({
          isLoading : false,
          userEmail : null
        })
      }
    }
    catch(error){
      setUser({
        isLoading : false,
        userEmail : null
      })
      return;
    }
  }

  useEffect(()=>{
    init();
  },[]);

  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/addcourses" element={<AddCourse/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </div>
  )
}

export default App