import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const SongCreate = () => {
  const [addSong, { data, loading }] = useMutation(mutation);
  const [title, setTitle] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addSong({
      variables: {
        title: title,
      },
    });
  };

  if (loading) return `loading...please wait`;

  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default SongCreate;
