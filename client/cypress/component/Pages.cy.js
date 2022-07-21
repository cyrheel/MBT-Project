import ConnexionPage from "../../src/Pages/ConnexionPage";
import InscriptionPage from "../../src/Pages/InscriptionPage";
import HomePage from "../../src/Pages/HomePage";
import ProjetCreationPage from "../../src/Pages/ProjetCreationPage";
import ProjectListPage from "../../src/Pages/ProjectListPage";
import ProjetDetailsPage from "../../src/Pages/ProjetDetailsPage";
import TicketCreationPage from "../../src/Pages/TicketCreationPage";
import TicketListPage from "../../src/Pages/TicketListPage";
import TicketDetailPage from "../../src/Pages/TicketDetailPage";
import UserListPage from "../../src/Pages/UserListPage";
import UserParamsPage from "../../src/Pages/UserParamsPage";

describe("Page rendering", () => {
  it("ConnexionPage", () => {
    cy.cyrilmount(<ConnexionPage />);
  });
  it("InscriptionPage", () => {
    cy.cyrilmount(<InscriptionPage />);
  });
  it("Home Page", () => {
    cy.cyrilmount(<HomePage />);
  });
  it("ProjetCreationPage", () => {
    cy.cyrilmount(<ProjetCreationPage />);
  });
  it("ProjectListPage", () => {
    cy.cyrilmount(<ProjectListPage />);
  });
  it("ProjetDetailsPage", () => {
    cy.cyrilmount(<ProjetDetailsPage />);
  });
  it("TicketCreationPage", () => {
    cy.cyrilmount(<TicketCreationPage />);
  });
  it("TicketListPage", () => {
    cy.cyrilmount(<TicketListPage />);
  });
  it("TicketDetailPage", () => {
    cy.cyrilmount(<TicketDetailPage />);
  });
  it("UserListPage", () => {
    cy.cyrilmount(<UserListPage />);
  });
  it("UserParamsPage", () => {
    cy.cyrilmount(<UserParamsPage />);
  });
});
