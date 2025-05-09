import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './Components/Navbar';
import Physics from './Pages/Physics';
import Chemistry from './Pages/Chemistry';
import Maths from './Pages/Maths';
import TeacherAssistant from './Pages/TeacherAssistant';
import PhysicsAssistant from './Pages/PhysicsAssistant';
import MathsAssistant from './Pages/MathsAssistant';
import ChemistryAssistant from './Pages/ChemistryAssistant';
function App() {
  return (
      <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/Teacherassistant' element={<TeacherAssistant></TeacherAssistant>}></Route>
        <Route path='/Physics' element={<Physics></Physics>}></Route>
        <Route path="/Chemistry" element={<Chemistry></Chemistry>}></Route>
        <Route path='/Maths' element={<Maths></Maths>}></Route>
        <Route path="/PhysicsAssistant" element={<PhysicsAssistant></PhysicsAssistant>}></Route>
        <Route path='/MathsAssistant' element={<MathsAssistant></MathsAssistant>}></Route>
        <Route path='/ChemistryAssistant' element={<ChemistryAssistant></ChemistryAssistant>}></Route>
      </Routes>
    </>
  )
}

export default App