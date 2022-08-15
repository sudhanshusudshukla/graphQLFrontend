import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import SongList from "./components/songList";
import App from "./components/App";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache({}),
  link: new HttpLink({ uri: "/graphql", fetch }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
        <Route path="song/new" component={SongCreate} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
