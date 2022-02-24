import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    return (
      <label htmlFor="imageInput">
        URL da imagem:
        <input id="imageInput" type="text" data-testid="image-input" />
      </label>
    );
  }
}
