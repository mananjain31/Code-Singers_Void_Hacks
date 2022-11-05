import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "components/wrappers/RequireAuth";
import LandingPage from "pages/LandingPage";
import LoginRegisterPage from "pages/LoginRegisterPage";
import LogoutPage from "pages/LogoutPage";
import WasteCategoryPage from "pages/WasteCategoryPage";
import LocateDustbinsPage from "pages/LocateDustbinsPage";
import WasteUpload from "pages/WasteUpload";
import FoodCollectorsPage from "pages/FoodCollectorsPage";
import Timeline from "pages/Timeline";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/locate-dustbins" element={<LocateDustbinsPage />} />
        <Route path="/waste-category" element={<WasteCategoryPage />} />
        <Route path="/login-register" element={<LoginRegisterPage />} />
        <Route
          path="/eWaste-timeline"
          element={<RequireAuth render={<WasteUpload />} />}
        />
        <Route path="/food-collectors" element={<FoodCollectorsPage />} />
        <Route
          path="/dashboard"
          element={<RequireAuth>Protected</RequireAuth>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
