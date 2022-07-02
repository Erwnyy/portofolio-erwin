import React from 'react'
import AboutDashboard from '../components/dashboard/aboutDashboard/AboutDashboard'
import Featured from '../components/dashboard/featured/Featured'
import Header from '../components/dashboard/header/header'
import Heros from '../components/dashboard/hero/Heros'
import Herosection from '../components/dashboard/herosection/Herosection'
import SlidersDashboard from '../components/dashboard/slidersDashboard/SlidersDashboard'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Heros/>
      <AboutDashboard/>
      <Featured/>
      <SlidersDashboard/>
      <Footer/>

    </div>
  )
}

export default Dashboard