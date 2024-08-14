import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <h1 className="note-app__header">NOTES</h1>

        <div className="note-app__body">
          <NoteInput addContact={this.onAddNoteHandler} />
          <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
}

export default NoteApp;
