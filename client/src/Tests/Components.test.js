import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import NavBar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import ProjectCreationForm from "../Components/ProjectCreationForm";
import ProjectList from "../Components/ProjectList";
import ProjectItem from "../Components/ProjectItem";
import TicketCreationForm from "../Components/TicketCreationForm";
import UsersDropDown from "../Components/UsersDropDown";

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

describe("# Components Rendering", () => {
  it("should render NavBar without crashing", () => {
    overRender(<NavBar />);
  });
  it("should render SearchBar without crashing", () => {
    overRender(<SearchBar />);
  });
  it("should render Project Creation Form without crashing", () => {
    overRender(<ProjectCreationForm />);
  });
  it("should render Project List component without crashing", () => {
    const mockedData = [
      { id: 1, name: "Project 1", start_time: "2022-06-15T00:00:00.000Z" },
      { id: 2, name: "Project 2", start_time: "2022-06-15T00:00:00.000Z" },
      { id: 3, name: "Project 3", start_time: "2022-06-15T00:00:00.000Z" },
    ];
    overRender(<ProjectList projects={mockedData} />);
  });
  it("should render Project Item without crashing", () => {
    const mockedData = {
      id: "2",
      status: "active",
      title: "Project 2",
      start_time: "2022-06-15T00:00:00.000Z",
      end_time: "2022-06-15T00:00:00.000Z",
      description: "Project 2 description",
    };
    overRender(<ProjectItem {...mockedData} />);
  });
  it("should render Ticket Creation Form without crashing", () => {
    overRender(<TicketCreationForm />);
  });
  it("should render Users dropdown without crashing", () => {
    overRender(<UsersDropDown />);
  });
});

describe("# Components Logic Tests", () => {
  it("should do something", () => {
    expect(true).toBe(true);
  });
});
