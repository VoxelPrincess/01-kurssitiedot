import React, { useState } from "react";

const Theory2a = (props) => {
  const { notes } = props;

  console.log("props value is", props);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Theory2a;
