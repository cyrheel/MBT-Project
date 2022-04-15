import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConnexionPage from "./Pages/ConnexionPage";
import TicketListPage from "./Pages/TicketListPage";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/ticketlist" element={<TicketListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
