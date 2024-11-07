import React, { useState } from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Llog from './components/llog'
import Sign from './components/Sign'
import Adminhome from './components/Adminhome'
import Adminaddjob from './components/Adminaddjob'
import Userhome from './components/Userhome'
import Adminmanagejob from './components/Adminmanagejob'
import Userbrowsejob from './components/Userbrowsejob'
import Userappliedjob from './components/Userappliedjob'
const App = () => {
  const [count,setcount] = useState(0)
  return (
    <>
    <div>
       
       <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/A' element={<Adminhome/>}/>
        <Route path='/B' element={<Userhome/>}/>
        <Route path='/AJ' element={<Adminaddjob/>}/>
        <Route path='AM' element={<Adminmanagejob/>}/>
        <Route path='UM' element={<Userbrowsejob/>}/>
        <Route path='UAJ' element={<Userappliedjob/>}/>
      <Route path='/L' element={<Llog/>}/>
      <Route path='/S' element={<Sign/>}/>
      </Routes> 
      </div>
    </div>
    </>
  )
}

export default App
