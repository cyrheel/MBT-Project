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

let client;

describe("# Page Rendering", () => {
  beforeAll(() => {
    client = new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache(),
    });
  });
  it("should render Connexion Page without crashing", () => {
    render(
      <BrowserRouter>
        <ConnexionPage />
      </BrowserRouter>
    );
  });
  it("should render Inscription Page without crashing", () => {
    render(
      <BrowserRouter>
        <InscriptionPage />
      </BrowserRouter>
    );
  });
  it("should render Home Page without crashing", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });
  it("should render Project Creation Page without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ProjetCreationPage />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Project List Page without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ProjectListPage />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Project Detail Page without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ProjetDetailsPage />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Ticket Creation Page without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <TicketCreationPage />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Ticket List Page without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <TicketListPage />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Ticket Detail Page without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <TicketDetailPage />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
});

describe("# Page Logic Tests", () => {
  it("should do something", () => {
    expect(true).toBe(true);
  });
});
