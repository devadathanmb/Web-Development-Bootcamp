import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    // const newValue = event.target.value;
    // if (event.target.name === "title") {
    //   setNote((previousValue) => {
    //     return {
    //       title: newValue,
    //       content: previousValue.content
    //     };
    //   });
    // } else if (event.target.name === "content") {
    //   setNote((previousValue) => {
    //     return {
    //       title: previousValue.title,
    //       content: newValue
    //     };
    //   });
    // }
    const { name, value } = event.target;
    setNote((previousNote) => {
      return {
        ...previousNote,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={Note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={Note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addClick(Note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
