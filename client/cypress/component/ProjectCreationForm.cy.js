import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { mount } from "cypress/react";
import ProjectCreationForm from "../../src/Components/ProjectCreationForm";

const overRender = (component) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  cy.mount(
    <ApolloProvider client={client}>
      <BrowserRouter>{component}</BrowserRouter>
    </ApolloProvider>
  );
};

describe("ProjectCreationForm.cy.js", () => {
  it("Should mount without crashing", () => {
    overRender(<ProjectCreationForm />);
  });
});
