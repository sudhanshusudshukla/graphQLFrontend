import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache({}),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div>Sudhanshu</div>
    </ApolloProvider>
  </React.StrictMode>
);
