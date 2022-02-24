import React, { Component } from 'react';

export default class DescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="descriptionInput">
        Descrição da carta:
        <textarea
          id="descriptionInput"
          type="text"
          data-testid="description-input"
        />
      </label>
    );
  }
}
