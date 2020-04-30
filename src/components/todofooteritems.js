import React, { Component } from "react";
import { observer } from "mobx-react";
import Todofooteritem from "../store/todofooteritem";

@observer
class Todofooteritems extends Component {
  filterclick = () => {
    Todofooteritem.changeitems(this.props.filter);
  };

  render() {
    return (
      <li>
        <a
          className={
            Todofooteritem.items == this.props.filter ? "selected" : ""
          }
          onClick={this.filterclick}
        >
          {this.props.filter}
        </a>
      </li>
    );
  }
}
export default Todofooteritems;
