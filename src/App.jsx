import React from 'react'
import Appbar from './components/Appbar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Courses from './components/Courses';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </div>
  )
}

export default App