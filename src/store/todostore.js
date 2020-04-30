import { observable, action } from "mobx";
import todomodel from './todomodel'

class Todostore {
  @observable todos = []

  defaultid = 0

  @action
  addtodo(title) {
    this.todos.push(new todomodel(this,title, false,false, this.defaultid++));
  }

}
const todostore = new Todostore()
export default todostore
