import { observable, action } from "mobx";
import Todostore from "./todostore";

class Todofooteritem {
  @observable items = "all";

  defaultid = 0;

  @action
  changeitems(filters) {
    if (filters == "all") {
      this.items = "all";

      for (var m = 0; m < Todostore.todos.length; m++) {
        Todostore.todos[m].hidden = false;
      }
    } else if (filters == "active") {
      this.items = "active";
      for (var m1 = 0; m1 < Todostore.todos.length; m1++) {
        if (!Todostore.todos[m1].completed) {
          Todostore.todos[m1].hidden = false;
        } else {
          Todostore.todos[m1].hidden = true;
        }
      }
    } else if (filters == "completed") {
      this.items = "completed";
      for (var m2 = 0; m2 < Todostore.todos.length; m2++) {
        if (!Todostore.todos[m2].completed) {
          Todostore.todos[m2].hidden = true;
        } else {
          Todostore.todos[m2].hidden = false;
        }
      }
    }
  }

  @action
  changeitem() {
    if (this.items == "all") {
      for (var m = 0; m < Todostore.todos.length; m++) {
        Todostore.todos[m].hidden = false;
      }
    } else if (this.items == "active") {
      for (var m1 = 0; m1 < Todostore.todos.length; m1++) {
        if (!Todostore.todos[m1].completed) {
          Todostore.todos[m1].hidden = false;
        } else {
          Todostore.todos[m1].hidden = true;
        }
      }
    } else if (this.items == "completed") {
      for (var m2 = 0; m2 < Todostore.todos.length; m2++) {
        if (!Todostore.todos[m2].completed) {
          Todostore.todos[m2].hidden = true;
        } else {
          Todostore.todos[m2].hidden = false;
        }
      }
    }
  }
}
const todofooteritem = new Todofooteritem();
export default todofooteritem;
