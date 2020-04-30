import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Todoitem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };
  remove = () => {
    this.props.todo.remove();
  };
  render() {
    const { todo } = this.props;

    return (
      <li
        className={[
          todo.completed ? "completed" : "",
          todo.hidden ? "hidden" : "",
        ].join(" ")}
      >
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.remove} />
        </div>
      </li>
    );
  }
}
export default Todoitem;
