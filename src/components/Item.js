import React, { Component } from 'react';

class Item extends Component {
  onDelete = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    ev.nativeEvent.stopImmediatePropagation();
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
        <div className="row item" onClick={() => this.props.onSelect(this.props.item)}>
          {this.props.item.name}
          <span onClick={this.onDelete}>Eliminar</span>
        </div>
    );
  }
}

export default Item;
