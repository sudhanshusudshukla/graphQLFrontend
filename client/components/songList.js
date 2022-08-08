import React from "react";
import gql from "graphql-tag";
import { graphql } from "@apollo/client/react/hoc";

const songList = () => {
  return <div>Song List</div>;
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(songList);
