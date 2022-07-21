import Navbar from "../../src/Components/Navbar";
import SearchBar from "../../src/Components/SearchBar";
import ProjectCreationForm from "../../src/Components/ProjectCreationForm";
import ProjectList from "../../src/Components/ProjectList";
import ProjectItem from "../../src/Components/ProjectItem";
import TicketCreationForm from "../../src/Components/TicketCreationForm";
import UsersDropDown from "../../src/Components/UsersDropDown";

describe("Components mount without crashing", () => {
  it("Navbar", () => {
    cy.cyrilmount(<Navbar />);
  });
  it("SearchBar", () => {
    cy.cyrilmount(<SearchBar />);
  });
  it("ProjectCreationForm", () => {
    cy.cyrilmount(<ProjectCreationForm />);
  });
  it("ProjectList", () => {
    const mokedData = [
      {
        id: 1,
        title: "Project 1",
        start_time: "2022-06-15T00:00:00.000Z",
      },
      {
        id: 2,
        title: "Project 2",
        start_time: "2022-06-15T00:00:00.000Z",
      },
      {
        id: 3,
        title: "Project 3",
        start_time: "2022-06-15T00:00:00.000Z",
      },
    ];
    cy.cyrilmount(<ProjectList projects={mokedData} />);
  });
  it("ProjectItem", () => {
    const mokedData = {
      id: 1,
      title: "Project 1",
      start_time: "2022-06-15T00:00:00.000Z",
      description: "Project 1 description",
    };
    cy.cyrilmount(<ProjectItem {...mokedData} />);
  });
  it("TicketCreationForm", () => {
    cy.cyrilmount(<TicketCreationForm />);
  });
  it("UsersDropDown", () => {
    cy.cyrilmount(<UsersDropDown />);
  });
});
