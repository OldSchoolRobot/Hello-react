import React, { Component } from 'react';

class Add extends Component {
  render() {
    return (
        <div className="add">
          <h1>Estás agregando un nuevo elemento</h1>
          <div className="content column">
            <label className="column" for="name">
              Nombre:
              <input type="text" id="name" name="name" />
            </label>
            <label className="column" for="description">
              Descripción:
              <textarea id="description" name="description" rows="8" ></textarea>
            </label>
            <div className="row">          
              <button className="button mr">Cancelar</button>
              <button className="button">Crear</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Add;
