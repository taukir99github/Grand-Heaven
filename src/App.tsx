import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Stepper from "./Components/ListingPage/Stepper/Stepper";
import ListingPage from "./Components/ListingPage/ListingPage";
import Home from "./Components/Dashboard/SideBar/Dashboard Home/DasHome";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home/>
      <Footer/>  */}
      {/* <ListingPage/> */}
      {/* <Dashboard/> */}
      {/* <Stepper/> */}
      <Home />
    </div>
  );
};

export default App;
