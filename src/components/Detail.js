import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.item.name,
      description: props.item.description,
      id: props.item.id,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.item.id !== state.id) {
      return props.item;
    }
    return null;
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { name, description } = this.state;

    return (
        <div className="detail">
          <h1>Estás editando un nuevo elemento</h1>
          <div className="content column">
            <label className="column" for="name">
              Nombre:
              <input type="text" id="name" name="name" value={name} onChange={this.onChange} />
            </label>
            <label className="column" for="description">
              Descripción:
              <textarea id="description" name="description" rows="8" value={description} onChange={this.onChange} ></textarea>
            </label>
            <div className="row">          
            <button 
                onClick={this.props.onCancel}
                className="button mr"
              >
                Cancelar
              </button>
              <button
                onClick={() => this.props.onEdit(name, description)}
                className="button"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Detail;
