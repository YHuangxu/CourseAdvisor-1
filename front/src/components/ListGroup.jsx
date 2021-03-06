/* eslint react/prop-types: 0 */
import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const s ={ 
      fontSize: 10,
      fontWeight: "bold"
    };
    const {items, valueProperty, onItemSelect, selectedItem } = this.props; 
    let i = 0;
    return (
      <ul className="list-group">

        {items.map(item => (
          <li key = {i++}
            onClick={() => onItemSelect(item)}
            style={s}
            className={item === selectedItem? "list-group-item list-group-item-action list-group-item-info" : "list-group-item list-group-item-action"}> 
            {item[valueProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
