import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import CreateArea from "./components/CreateArea.jsx";

const KEY = "brawery.react.noteApp";

function App() {
  const [notes, setNotes] = useState([]);

  // Work wirh LocalStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(KEY));
    if (storedNotes) setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(notes));
  }, [notes]);

  // Add New Note to the Array
  function onAddNote(note) {
    if (note.title !== "" && note.content !== "") {
      setNotes((prevNotes) => {
        return [...prevNotes, note];
      });
    } else {
      alert("You need to write a title and content!!!");
    }
  }

  // Delete a Note
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index + 1 !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea add={onAddNote} />

      <div className="container">
        <div className="container__notes">
          {notes.map((note, index) => {
            return (
              <Note
                key={index + 1}
                id={index + 1}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
