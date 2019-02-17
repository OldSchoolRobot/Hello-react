import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render() {
    return (
        <div className="list">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <button className="button full">Agregar elemento</button>
        </div>
    );
  }
}

export default List;
