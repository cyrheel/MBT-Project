import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConnexionPage from "./Pages/ConnexionPage";
import InscriptionPage from "./Pages/InscriptionPage";
import ProjectCreationPage from "./Pages/ProjetCreationPage";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/register" element={<InscriptionPage />} />
        <Route path="/projetCreation" element={<ProjectCreationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
