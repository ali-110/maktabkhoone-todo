import React, { Component } from "react";
import todostore from "../store/todostore";

class Todoentry extends Component {
  state = {
    value: "",
  };
  addnewitem(event) {
    if (event.keyCode !== 13) {
      return;
    }else if(this.state.value != ''){
    event.preventDefault();
    todostore.addtodo(this.state.value);
    this.setState({ value: "" });
  }
  }
  render() {
    return (
      <header className="header">
        <h1>todo</h1>
        <input
          value={this.state.value}
          type="text"
          className="new-todo"
          placeholder="whats need to be done?"
          onChange={(event) => this.setState({ value: event.target.value })}
          onKeyDown={(event) => this.addnewitem(event)}
        />
      </header>
    );
  }
}
export default Todoentry;
