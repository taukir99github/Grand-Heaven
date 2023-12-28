import Navbar from "./Components/Navbar/Navbar";
import DashHome from "./Components/Dashboard/Dashboard Home/DasHome";
import LoginSignup from "./Components/LogIn/LoginSignup";
import { Routes, Route, Navigate } from "react-router-dom";
import AdditionalDetails from "./Components/Dashboard/PostProperty/Additional Details/AdditionalDetails";
import Aminities from "./Components/Dashboard/PostProperty/Aminities/Aminities";
import PropertyDetails from "./Components/Dashboard/PostProperty/PropertyDetails/PropertyDetails";
import PostProperty from "./Components/Dashboard/PostProperty/PostProperty";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import PropertyDetailsPage from "./Components/PropertyDetailsPage/PropertyDetailsPage";
import Properties from "./Components/Properties/Properties";

import Profile from "./Components/Dashboard/Profile/Profile";
import MyListing from "./Components/Dashboard/My Listings/MyListing";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashHome />}>
          <Route path="post-property" element={<PostProperty />}>
            <Route path="property-details" element={<PropertyDetails />} />
            <Route path="additional-details" element={<AdditionalDetails />} />
            <Route path="aminities" element={<Aminities />} />
            <Route index element={<Navigate to="property-details" replace />} />
          </Route>
          <Route path="profile" element={<Profile/>}/>
          <Route path="MyListing" element={<MyListing/>}/>
        </Route>
        <Route path="LogIn" element={<LoginSignup />} />
        <Route path="PropertyDetailsPage" element={<PropertyDetailsPage />} />
        <Route path="Properties" element={<Properties />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
