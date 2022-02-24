import React, { Component } from 'react';

export default class Atributo extends Component {
  render() {
    return (
      <div>
        <label htmlFor="atributoInput">
          Atributo 1 da carta:
          <input id="atributoInput" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="atributoInput">
          Atributo 2 da carta:
          <input id="atributoInput" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="atributoInput">
          Atributo 3 da carta:
          <input id="atributoInput" type="number" data-testid="attr3-input" />
        </label>
      </div>
    );
  }
}
