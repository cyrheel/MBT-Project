/// <reference types="cypress" />

import React from "react";
import "./component.ts";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

Cypress.Commands.add("cyrilmount", (component: React.ReactNode) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  cy.mount(
    <ApolloProvider client={client}>
      <BrowserRouter>{component}</BrowserRouter>
    </ApolloProvider>
  );
});
