import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteNote from "./DeleteNote";

function NotesItem({title, createdAt, body, id, onDelete}) {
    return (
        <div className="Note-item">
            <NotesItemBody title={title} createdAt={createdAt} body={body} />
            <DeleteNote id={id} onDelete={onDelete} />
        </div>
    )
}

export default NotesItem;