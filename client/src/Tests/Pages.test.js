import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ConnexionPage from "../Pages/ConnexionPage";
import InscriptionPage from "../Pages/InscriptionPage";
import HomePage from "../Pages/HomePage";
import ProjetCreationPage from "../Pages/ProjetCreationPage";
import ProjectListPage from "../Pages/ProjectListPage";
import ProjetDetailsPage from "../Pages/ProjetDetailsPage";
import TicketCreationPage from "../Pages/TicketCreationPage";
import TicketListPage from "../Pages/TicketListPage";
import TicketDetailPage from "../Pages/TicketDetailPage";

const overRender = (component) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>{component}</BrowserRouter>
    </ApolloProvider>
  );
};

describe("# Page Rendering", () => {
  it("should render Connexion Page without crashing", () => {
    overRender(<ConnexionPage />);
  });
  it("should render Inscription Page without crashing", () => {
    overRender(<InscriptionPage />);
  });
  it("should render Home Page without crashing", () => {
    overRender(<HomePage />);
  });
  it("should render Project Creation Page without crashing", () => {
    overRender(<ProjetCreationPage />);
  });
  it("should render Project List Page without crashing", () => {
    overRender(<ProjectListPage />);
  });
  it("should render Project Detail Page without crashing", () => {
    overRender(<ProjetDetailsPage />);
  });
  it("should render Ticket Creation Page without crashing", () => {
    overRender(<TicketCreationPage />);
  });
  it("should render Ticket List Page without crashing", () => {
    overRender(<TicketListPage />);
  });
  it("should render Ticket Detail Page without crashing", () => {
    overRender(<TicketDetailPage />);
  });
});

describe("# Page Content Tests", () => {
  describe("-Connexion Page", () => {
    it("should have a signIN component", () => {});
  });
  describe("-Inscription Page", () => {
    it("should have a signUP component", () => {});
  });
  describe("-Home Page", () => {
    it("should have a navbar", () => {});
  });
  describe("-Projet Creation Page", () => {
    it("should have a navbar", () => {});
  });
});
