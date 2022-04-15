import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConnexionPage from "./Pages/ConnexionPage";
import UserListPage from "./Pages/UserListPage";
import TicketDetailPage from "./Pages/TicketDetailPage";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/userlist" element={<UserListPage />} />
        <Route path="/ticketdetail" element={<TicketDetailPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
