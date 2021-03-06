import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import AboutMe from '../pages/AboutMe'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
      </Routes>
    </div>
  )
}

export default Router