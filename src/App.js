import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "components/wrappers/RequireAuth";
import LandingPage from "pages/LandingPage";
import LoginRegisterPage from "pages/LoginRegisterPage";
import LogoutPage from "pages/LogoutPage";
import ImagePred from "pages/ImagePred";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/img-pred" element={<ImagePred />} />
        <Route path="/login-register" element={<LoginRegisterPage />} />
        <Route
          path="/logout"
          element={
            <RequireAuth>
              <LogoutPage />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={<RequireAuth>Protected</RequireAuth>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
