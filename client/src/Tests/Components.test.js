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

let client;

describe("# Components Rendering", () => {
  beforeAll(() => {
    client = new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache(),
    });
  });
  it("should render NavBar without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render SearchBar without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Project Creation Form without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ProjectCreationForm />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Project List component without crashing", () => {
    const mockedData = [
      { id: 1, name: "Project 1", start_time: "2022-06-15T00:00:00.000Z" },
      { id: 2, name: "Project 2", start_time: "2022-06-15T00:00:00.000Z" },
      { id: 3, name: "Project 3", start_time: "2022-06-15T00:00:00.000Z" },
    ];
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ProjectList projects={mockedData} />
        </BrowserRouter>
      </ApolloProvider>
    );
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
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ProjectItem {...mockedData} />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Ticket Creation Form without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <TicketCreationForm />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
  it("should render Users dropdown without crashing", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <UsersDropDown />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
});

describe("# Components Logic Tests", () => {
  it("should do something", () => {
    expect(true).toBe(true);
  });
});
