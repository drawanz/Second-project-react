import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nameInput">
            Nome da carta:
            <input
              id="nameInput"
              type="text"
              data-testid="name-input"
              placeholder="Placeholder"
            />
          </label>

          <label htmlFor="descriptionInput">
            Descrição da carta:
            <textarea
              id="descriptionInput"
              type="text"
              data-testid="description-input"
            />
          </label>

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

          <label htmlFor="imageInput">
            URL da imagem:
            <input id="imageInput" type="text" data-testid="image-input" />
          </label>

          <label htmlFor="rareInput">
            Raridade da carta:
            <select id="rareInput" type="text" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="SuperTrunfo">
            <input
              id="SuperTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
            />
            Super Trybe Trunfo
          </label>

          <button type="button" data-testid="save-button">
            Salvar
          </button>

        </form>
      </div>
    );
  }
}
