import React, { Component } from 'react';
import {Header, List, Detail, Add} from './components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      isAdding: false,
      isEditing: false,
      item: null,
    };
  }

  renderContent() {
    const { isAdding, isEditing, item } = this.state;

    if (isAdding) {
      return <Add onAdd={this.onAdd} onCancel={this.onCancel} />;
    } else if (isEditing) {
      return <Detail item={item} onCancel={this.onCancel} onEdit={this.onEdit} />
    }
  }

  onAdd = (name, description) => {
    const { items } = this.state;
    const id = Object.values(items).length + 1;
    items[id] = { name, description, id };
    this.setState({ items });
    this.onCancel();
  }

  onEdit = (name, description) => {
    const { items, item } = this.state;
    items[item.id] = { name, description, id: item.id };
    this.setState({ items });
    this.onCancel();
  }

  onDelete = (item) => {
    const { items } = this.state;
    items[item.id] = { deleted: true };
    this.setState({ items });
    this.onCancel();
  }

  onSelect = (item) => {
    this.setState({ isAdding: false, isEditing: true, item });
  }

  onCancel = () => {
    this.setState({ isAdding: false, isEditing: false, item: null });
  }

  onStartAdding = () => {
    this.setState({ isAdding: true });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="column app">
        <Header />
        <div className="row">
          <List items={items} onSelect={this.onSelect} onStartAdding={this.onStartAdding} onDelete={this.onDelete} />
          <div className="box full-width">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
