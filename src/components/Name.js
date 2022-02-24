import React, { Component } from 'react';

export default class NameInput extends Component {
  render() {
    return (
      <label htmlFor="nameInput">
        Nome da carta:
        <input
          id="nameInput"
          type="text"
          data-testid="name-input"
          placeholder="Placeholder"
        />
      </label>
    );
  }
}
