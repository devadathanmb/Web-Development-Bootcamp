import React, { useState } from "react";

function ToDoItem(props) {
  // function crossOutitem(event) {}
  return (
    <li
      onClick={() => {
        //So what happens here is the props has a functional attribute called onChecked
        //Which calls a method to delete an item from the list
        //Since the id is required to delete the item uniquely, it is passed
        //as an argument to the delete function
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
