import { render } from "@testing-library/react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import App from "../App";

//id, OnDelete, noteInput
export const NoteComponent = (props) => {
  const [deleteMessage, setDeleteMessage] = React.useState(false);
  //console.log("note component notetext:", props.userInput);
  if (deleteMessage) {
    return (
      <div className="deleteMessage">
        estas segura?
        <div>
          <button
            className="yesDelButton"
            onClick={() => {
              props.onDelete(props.id);
            }}
          >
            Si
          </button>
          <button
            className="noDelButton"
            onClick={() => {
              setDeleteMessage(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="Note-body">
        <div>
          <a className="dropdown">
            Move To
            <div className="dropdown-content">
              {props.status !== "todo" && (
                <a onClick={() => props.move(props.id, "todo")}>Todo</a>
              )}

              {props.status !== "doing" && (
                <a onClick={() => props.move(props.id, "doing")}>doing</a>
              )}
              {props.status !== "finished" && (
                <a onClick={() => props.move(props.id, "finished")}>done</a>
              )}
            </div>
          </a>

          <a className="note-delete" onClick={() => setDeleteMessage(true)}>
            Delete
          </a>
        </div>
        <textarea
          placeholder="Edit Here"
          //value={props.text}
          type="text"
          onChange={(e) => props.noteInput(e.target.value)}
        >
          {props.userInput}
        </textarea>
      </div>
    </div>
  );
};

NoteComponent.propTypes = {
  id: PropTypes.number.isRequired,
};

export default NoteComponent;

//console.log("user input", userInput);

//console.log(`note id created:${props.id}`);
