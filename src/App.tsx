import Navbar from "./Components/Navbar/Navbar";
import DashHome from "./Components/Dashboard/Dashboard Home/DasHome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdditionalDetails from "./Components/Dashboard/PostProperty/Additional Details/AdditionalDetails";
import Aminities from "./Components/Dashboard/PostProperty/Aminities/Aminities";
import PropertyDetails from "./Components/Dashboard/PostProperty/PropertyDetails/PropertyDetails";
import PostProperty from "./Components/Dashboard/Dashboard Home/Sidebar Components/PostProperty";

const App = () => {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashHome />}>
            <Route path="post-property" element={<PostProperty />}>
              <Route path="property-details" element={<PropertyDetails />} />
              <Route
                path="additional-details"
                element={<AdditionalDetails />}
              />
              <Route path="aminities" element={<Aminities />} />
              <Route
                index
                element={<Navigate to="property-details" replace />}
              />
            </Route>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
