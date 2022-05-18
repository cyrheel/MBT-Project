import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConnexionPage from "./Pages/ConnexionPage";
import InscriptionPage from "./Pages/InscriptionPage";
import ProjectCreationPage from "./Pages/ProjetCreationPage";
import ProjetDetailsPage from "./Pages/ProjetDetailsPage";
import TicketCreationPage from "./Pages/TicketCreationPage";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/register" element={<InscriptionPage />} />
        <Route path="/projetCreation" element={<ProjectCreationPage />} />
        <Route path="/projetDetails" element={<ProjetDetailsPage />} />
        <Route path="/ticketCreation" element={TicketCreationPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
