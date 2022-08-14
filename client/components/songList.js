import React from "react";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

const songList = () => {
  const { data, loading, error } = useQuery(query);

  if (loading) return `loading ...`;

  const renderSongList = () => {
    const d = data.songs.map((s) => {
      return <li key={s.id}>{s.title}</li>;
    });
    return d;
  };

  return <div> {renderSongList()}</div>;
};

export default songList;
