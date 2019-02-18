import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return (
        <div className="detail">
          <h1>Estás editando un nuevo elemento</h1>
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
              <button className="button">Guardar</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Detail;
