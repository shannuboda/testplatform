import { useState } from 'react'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
        </Routes>
    </>
  )
}

export default App
