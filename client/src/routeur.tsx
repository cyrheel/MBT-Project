import { useContext } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { CookieContext } from 'Contexts/CookieContext';
import HomePage from './Pages/HomePage';
import ConnexionPage from './Pages/ConnexionPage';
import InscriptionPage from './Pages/InscriptionPage';
import UserListPage from './Pages/UserListPage';
import UserParamsPage from './Pages/UserParamsPage';
import TicketCreationPage from './Pages/TicketCreationPage';
import TicketDetailPage from './Pages/TicketDetailPage';
import TicketListPage from './Pages/TicketListPage';
import ProjectCreationPage from './Pages/ProjetCreationPage';
import ProjetDetailsPage from './Pages/ProjetDetailsPage';
import ProjectListPage from './Pages/ProjectListPage';

// Helpers
function useAuth() {
  return useContext(CookieContext);
}

function PrivateRoute({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();
  if (auth.cookie === '') {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return children;
}

// Routeur
function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        {
          // Main Routes
        }
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/register" element={<InscriptionPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        {
          // Project Routes
        }
        <Route
          path="/projetCreation"
          element={
            <PrivateRoute>
              <ProjectCreationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/projetDetails"
          element={
            <PrivateRoute>
              <ProjetDetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/projetList"
          element={
            <PrivateRoute>
              <ProjectListPage />
            </PrivateRoute>
          }
        />
        {
          // Ticket Routes
        }
        <Route
          path="/ticketCreation"
          element={
            <PrivateRoute>
              <TicketCreationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketDetails"
          element={
            <PrivateRoute>
              <TicketDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketlist"
          element={
            <PrivateRoute>
              <TicketListPage />
            </PrivateRoute>
          }
        />
        {
          // Other Routes
        }
        <Route
          path="/userlist"
          element={
            <PrivateRoute>
              <UserListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/userparam"
          element={
            <PrivateRoute>
              <UserParamsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
