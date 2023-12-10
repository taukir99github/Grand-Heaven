import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Dashboard from './Components/Dashboard/Dashboard'
import Stepper from './Components/ListingPage/Stepper/Stepper'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Home/>
      <Footer/> 
    <Dashboard/> */}
      <Stepper/>
     
  
     
    </div>
  )
}

export default App
