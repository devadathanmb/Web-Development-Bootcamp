import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 id="title">{props.title}</h1>
      <p id="content">{props.content}</p>
      <button
        onClick={(event) => {
          props.deleteNote(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
