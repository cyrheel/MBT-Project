import React, { useContext } from 'react';

import Routeur from './routeur';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './Styles/index.css';
import CookieContextProvider from 'Contexts/CookieContext';
import { CookieContext } from './Contexts/CookieContext';

export default function App() {
  const { cookie, setCookie } = useContext(CookieContext);

  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: cookie ? `Bearer ${cookie}` : '',
      },
    };
  });
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include',
    link: authLink.concat(httpLink),
  });
  return (
    <ApolloProvider client={client}>
      <CookieContextProvider>
        <Routeur />
      </CookieContextProvider>
    </ApolloProvider>
  );
}
