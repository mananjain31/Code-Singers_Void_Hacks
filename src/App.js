import { Route, Routes } from "react-router-dom";
import RequireAuth from "components/wrappers/RequireAuth";
import LandingPage from "pages/LandingPage";
import LoginRegisterPage from "pages/LoginRegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login-register" element={<LoginRegisterPage />} />
      <Route element={<RequireAuth>Protected</RequireAuth>} />
    </Routes>
  );
}

export default App;
