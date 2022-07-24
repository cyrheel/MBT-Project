import React from 'react';
import Routeur from './routeur';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';
import './Styles/index.css';

export default function App() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });
  const middleware = new ApolloLink((operation: any, forward: any) => {
    let cookie = document.cookie;
    if (cookie !== '') {
      operation.setContext({
        headers: {
          Authorization: cookie.substring(6, cookie.length),
        },
      });
    }
    return forward(operation);
  });

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include',
    link: concat(middleware, httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <Routeur />
    </ApolloProvider>
  );
}
