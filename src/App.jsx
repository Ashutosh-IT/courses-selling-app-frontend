import React from 'react'
import Appbar from './components/Appbar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App