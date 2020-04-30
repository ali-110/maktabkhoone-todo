import React, { Component } from 'react'
import Todoitem from './todoitem.js'
import todostore from '../store/todostore'
import {observer} from 'mobx-react'

@observer
export default class Todoitems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {
              todostore.todos.map(todo=>{
                return(
                  <Todoitem todo={todo} />
                )
              })
          }
        </ul>
      </section>
    );
  }
}
