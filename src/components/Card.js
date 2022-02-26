import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      dates,
      deleteButton,
    } = this.props;
    return (
      <div>
        <h6 data-testid="name-card">{cardName}</h6>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h6 data-testid="description-card">{cardDescription}</h6>
        <h6 data-testid="attr1-card">{cardAttr1}</h6>
        <h6 data-testid="attr2-card">{cardAttr2}</h6>
        <h6 data-testid="attr3-card">{cardAttr3}</h6>
        <h6 data-testid="rare-card">{cardRare}</h6>
        {dates ? (
          <button
            type="button"
            onClick={ deleteButton }
            data-testid="delete-button"
          >
            Excluir
          </button>
        ) : (
          <p />
        )}
        {cardTrunfo === true ? (
          <p data-testid="trunfo-card">Super Trunfo</p>
        ) : (
          <p />
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
