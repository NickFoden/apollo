import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "../../ui/App";

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloProvider />, document.getElementById("app"));
});

//https://www.youtube.com/watch?v=5_xLJnp3kzY&list=PLLnpHn493BHFTDL9M1PKnxQwBwOZ8J-h4&index=7
