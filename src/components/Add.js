import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { name, description } = this.state;

    return (
        <div className="column">
          <h1>Estás agregando un nuevo elemento</h1>
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
                onClick={() => this.props.onAdd(name, description)}
                className="button"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Add;
