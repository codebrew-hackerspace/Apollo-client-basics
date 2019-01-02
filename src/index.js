import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import React from "react";
import { render } from "react-dom";

import MyName from "./components/MyName.js";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <MyName />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
