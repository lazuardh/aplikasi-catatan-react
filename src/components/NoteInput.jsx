import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onbodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="title" value={this.setState.title} onChange={this.onTitleChangeEventHandler} />
        <input type="text" placeholder="Tuliskan catatanmu disini" value={this.setState.body} onChange={this.onbodyChangeEventHandler} />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
