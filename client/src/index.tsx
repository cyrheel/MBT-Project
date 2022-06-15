import React from "react";
import ReactDOM from "react-dom/client";
import Routeur from "./routeur";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./Styles/index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Routeur />
    </React.StrictMode>
  </ApolloProvider>
);
