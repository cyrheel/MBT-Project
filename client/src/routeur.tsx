import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConnexionPage from "./Pages/ConnexionPage";
import InscriptionPage from "./Pages/InscriptionPage";
import UserListPage from "./Pages/UserListPage";
import TicketDetailPage from "./Pages/TicketDetailPage";
import ProjectCreationPage from "./Pages/ProjetCreationPage";
import ProjetDetailsPage from "./Pages/ProjetDetailsPage";
import ProjectListPage from "./Pages/ProjectListPage";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        {
          // Main Routes
        }
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/register" element={<InscriptionPage />} />
        {
          // Project Routes
        }
        <Route path="/projetCreation" element={<ProjectCreationPage />} />
        <Route path="/projetDetails" element={<ProjetDetailsPage />} />
        <Route path="/projetList" element={<ProjectListPage />} />
        {
          // Ticket Routes
        }
        <Route path="/ticketdetail" element={<TicketDetailPage />} />
        {
          // Other Routes
        }
        <Route path="/userlist" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
