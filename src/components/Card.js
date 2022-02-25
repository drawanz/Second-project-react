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
    } = this.props;
    return (
      <div>
        <h6 data-testid="name-card">{ cardName }</h6>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h6 data-testid="description-card">{ cardDescription }</h6>
        <h6 data-testid="attr1-card">{ cardAttr1 }</h6>
        <h6 data-testid="attr2-card">{ cardAttr2 }</h6>
        <h6 data-testid="attr3-card">{ cardAttr3 }</h6>
        <h6 data-testid="rare-card">{ cardRare }</h6>
        {(cardTrunfo) === true
          ? <p data-testid="trunfo-card">Super Trunfo</p>
          : <p />}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
