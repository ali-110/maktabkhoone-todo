import React, { Component } from "react";
import { observer } from "mobx-react";
import Todostore from "../store/todostore";
import Todofooteritems from "../components/todofooteritems";
import Todofooteritem from "../store/todofooteritem";

@observer
export default class Todofooter extends Component {
  itemleft() {
    Todofooteritem.changeitem();
    var k = 0;
    for (var j = 0; j < Todostore.todos.length; j++) {
      if (!Todostore.todos[j].completed) {
        k++;
      }
    }

    return k;
  }
  clearcompleted() {
    for (var m = 0; m < Todostore.todos.length; m++) {
      if (Todostore.todos[m] !== undefined && Todostore.todos[m].completed) {
        var o = Todostore.todos[m].id;
        m--;
        Todostore.todos[o].remove();
      }
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="todo-count">{this.itemleft() + " items left"}</div>
        <ul className="filters">
          <Todofooteritems filter="all" />
          <Todofooteritems filter="active" />
          <Todofooteritems filter="completed" />
        </ul>
        <div className="clear-completed" onClick={this.clearcompleted}>
          Clear completed
        </div>
      </div>
    );
  }
}
