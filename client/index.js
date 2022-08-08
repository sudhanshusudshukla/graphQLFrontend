import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import SongList from "./components/songList";

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache({}),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div>
        Sudhanshu
        <SongList />
      </div>
    </ApolloProvider>
  </React.StrictMode>
);
