import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import NavBar from "../Components/Navbar";
// import SearchBar from "../Components/SearchBar";
// import ProjectCreationForm from "../Components/ProjectCreationForm";
// import ProjectList from "../Components/ProjectList";
// import ProjectItem from "../Components/ProjectItem";
// import TicketCreationForm from "../Components/TicketCreationForm";
// import UsersDropDown from "../Components/UsersDropDown";

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

describe("# Components Logic", () => {
  describe("-NavBar", () => {
    it("should properly redirect", async () => {
      const user = userEvent.setup();
      overRender(<NavBar />);
      await user.click(screen.getByRole("button", { name: /Projects/i }));
    });
  });
});
