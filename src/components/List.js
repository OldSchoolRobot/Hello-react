import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render() {
    return (
        <div className="box list">
          {Object.values(this.props.items).filter(item => !item.deleted).map(item => <Item item={item} onSelect={this.props.onSelect} onDelete={this.props.onDelete} />)}
          <button
           onClick={this.props.onStartAdding}
           className="button full-width"
          >
            Agregar elemento
          </button>
        </div>
    );
  }
}

export default List;
