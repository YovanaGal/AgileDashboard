import "./App.css";
import React, { useState, useEffect } from "react";
import NoteComponent from "./Components/NoteComponent";
import { UseState } from "react";
import { ChromePicker } from "react-color";
import { render } from "@testing-library/react";
import { ColorPicker } from "react-color-palette";
import { v4 } from "uuid";
import { useTheme } from "styled-components";

export const App = (props) => {
  const [todo, setTodo] = React.useState([]);
  // const [doing, setDoing] = React.useState([]);
  // const [done, setDone] = React.useState([]);
  const [color, setColor] = React.useState(false);
  const [pickColor, setPickColor] = React.useState("#ffff");
  // const [userInput, setuserInput] = React.useState(
  //   window.localStorage.getItem("userInput")
  // );
  const [userInput, setuserInput] = React.useState("");

  const closePicker = (close) => {
    setColor(false);
  };

  const createNote = () => {
    const newNote = {
      id: v4(),
      text: userInput,
      status: "todo",
    };
    setuserInput("");
    setTodo([...todo, newNote]);
  };

  // const setLocalStorage = (value, notes) => {
  //   try {
  //     setuserInput(value);
  //     setTodo(notes);
  //     window.localStorage.setItem("userInput", value);
  //     window.localStorage.setItem("todo", notes);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  //console.log("user input props:", userInput);

  const deleteNote = (id) => {
    //console.log(`note id deleted: ${id}`);
    const removeNote = todo.filter((note) => note.id !== id);
    setTodo(removeNote);
    //console.log(`note id: ${id}`);
  };

  const moveNote = (id, status, text) => {
    setTodo(
      todo.map((note) => {
        if (note.id === id) {
          note.status = status;
          note.text = text;
        }
        return note;
      })
    );
  };

  return (
    <div>
      <div className="Banner">
        <div className="Banner-letters"> T O D O </div>
        <div className="Banner-letters">D O I N G</div>
        <div className="Banner-letters">D O N E</div>
      </div>
      <div className="Banner">
        <div className="Banner-body" style={{ backgroundColor: pickColor.hex }}>
          <div>
            {todo
              .filter((note) => note.status === "todo")
              .map((note) => (
                <NoteComponent
                  {...note}
                  onDelete={deleteNote}
                  move={moveNote}
                  userInput={userInput}
                  noteInput={setuserInput}
                />
              ))}
          </div>
        </div>
        <div className="Banner-body" style={{ backgroundColor: pickColor.hex }}>
          {todo
            .filter((note) => note.status === "doing")
            .map((note) => (
              <NoteComponent
                {...note}
                onDelete={deleteNote}
                move={moveNote}
                userInput={userInput}
                noteInput={setuserInput}
              />
            ))}
        </div>
        <div className="Banner-body" style={{ backgroundColor: pickColor.hex }}>
          {todo
            .filter((note) => note.status === "finished")
            .map((note) => (
              <NoteComponent
                {...note}
                onDelete={deleteNote}
                move={moveNote}
                userInput={userInput}
                noteInput={setuserInput}
              />
            ))}
        </div>
      </div>
      <div>
        <div className="createAndColorDIV">
          <button className="addNote" onClick={() => createNote()}>
            Create Note
          </button>

          <button
            className="ColorPalette"
            style={{ backgroundColor: pickColor.hex }}
            onClick={() => setColor(true)}
          ></button>
        </div>
        {color && (
          <div>
            <ChromePicker
              color={pickColor}
              onChange={(updateColor) => setPickColor(updateColor)}
            />
            <button onClick={() => closePicker()}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
