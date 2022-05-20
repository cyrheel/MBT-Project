import React from "react";
import ReactDOM from "react-dom/client";
import Routeur from "./routeur";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client";

import "./Styles/index.css";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

client
.query({
  query: gql`
    query GetAllProject {
      project() {
      }
    }
  `
})
.then(result => console.log(result));

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
