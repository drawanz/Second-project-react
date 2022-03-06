import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import FilterCss from './componentsCss/FilterCss.css';

export default class Filter extends Component {
  render() {
    const { filterName, filterRare, filterTrunfo, onInputChange } = this.props;
    return (
      <div className="div-filtros">
        <h6>Filtros de busca:</h6>
        <input
          id="nameFilter"
          name="filterName"
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          value={ filterName }
          onChange={ onInputChange }
        />
        <select
          id="selectFilter"
          name="filterRare"
          data-testid="rare-filter"
          type="text"
          placeholder="Raridade"
          value={ filterRare }
          onChange={ onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="filterTrunfo">
          <input
            name="filterTrunfo"
            id="filterTrunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string,
  filterRare: PropTypes.string,
  filterTrunfo: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;
