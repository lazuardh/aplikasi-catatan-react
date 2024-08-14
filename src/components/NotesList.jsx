import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <div className="notes-list__empty-message">
          <p>Catatan tidak ditemukan</p>
        </div>
      ) : (
        notes.map((note) => <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />)
      )}
    </div>
  );
}

export default NotesList;
