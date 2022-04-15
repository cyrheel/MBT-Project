import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConnexionPage from "./Pages/ConnexionPage";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<ConnexionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
