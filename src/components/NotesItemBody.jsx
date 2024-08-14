import React from "react";

function NotesItemBody({title, createdAt, body}) {
    return (
        <div className="notes-item__content">
            <h2 className="notes-item__title">{title}</h2>
            <h5 className="notes-item__date">{createdAt}</h5>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NotesItemBody;