import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import SongList from "./components/songList";

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache({}),
  link: new HttpLink({ uri: "/graphql", fetch }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <div>Sudhanshu</div>

      <SongList />
    </React.StrictMode>
  </ApolloProvider>
);
