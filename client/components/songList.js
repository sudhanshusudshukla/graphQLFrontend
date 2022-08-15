import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router";

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

  return (
    <div>
      <ul className="collections"> {renderSongList()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default songList;
