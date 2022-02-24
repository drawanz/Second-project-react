import React, { Component } from 'react';

export default class Raridade extends Component {
  render() {
    return (
      <label htmlFor="rareInput">
        Raridade da carta:
        <select id="rareInput" type="text" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}
