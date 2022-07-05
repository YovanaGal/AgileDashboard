import { render } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";
import App from "../App";

//id, OnDelete
export const NoteComponent = (props) => {
  const [deleteMessage, setDeleteMessage] = React.useState(false);
  const [userInput, setuserInput] = React.useState("");
  const user = props.userInput;
  console.log("user input", userInput);
  // if (deleteMessage) {
  //   return (
  //     <div>
  //       estas segura?
  //       <button
  //         onClick={() => {
  //           props.onDelete(props.id);
  //         }}
  //       >
  //         Si
  //       </button>
  //       <button
  //         onClick={() => {
  //           setDeleteMessage(false);
  //         }}
  //       >
  //         No
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div key={props.id}>
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

          {/* <a className="note-delete" onClick={() => setDeleteMessage(true)}> */}
          <a className="note-delete" onClick={() => props.onDelete(props.id)}>
            Delete
          </a>
        </div>
        <textarea
          placeholder="Edit Here"
          value={userInput}
          type="text"
          onChange={(e) => setuserInput(e.target.value)}
        >
          {userInput}
        </textarea>
      </div>
    </div>
  );
};

NoteComponent.propTypes = {
  id: PropTypes.number.isRequired,
};

export default NoteComponent;
