import { observable } from "mobx";
import todostore from "./todostore";

export default class Todomodel {
  store;
  id;
  @observable title;
  @observable completed;
  @observable hidden;

  constructor(store, title, completed, hidden, id) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
    this.hidden = hidden;
  }

  toggle() {
    this.completed = !this.completed;
  }
  hidden() {
    this.hidden = !this.hidden;
  }
  remove() {
    todostore.todos.splice(this.id, 1);
    todostore.defaultid--;
    for (var i = this.id; i <= todostore.todos.length + 1; i++) {
      if (todostore.todos[i] !== undefined) {
        todostore.todos[i].id--;
      }
    }
  }
}
