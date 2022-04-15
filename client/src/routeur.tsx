import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConnexionPage from "./Pages/ConnexionPage";
import UserListPage from "./Pages/UserListPage";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/userlist" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
