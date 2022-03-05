import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardCss from './componentsCss/CardCss.css';

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
      <section>
        <div className="div-card">

          <div className="card-header">
            <h4 data-testid="name-card">{cardName}</h4>
          </div>

          <img src={ cardImage } alt={ cardName } data-testid="image-card" />

          <div className="description">
            <p data-testid="description-card">{cardDescription}</p>
          </div>

          <div className="div-card-atributos">
            <div className="div-card-atributo">
              <p>Atrbibuto 1: </p>
              <div />
              <p data-testid="attr1-card">{cardAttr1}</p>
            </div>
            <div className="div-card-atributo">
              <p>Atrbibuto 2: </p>
              <div />
              <p data-testid="attr2-card">{cardAttr2}</p>
            </div>
            <div className="div-card-atributo">
              <p>Atrbibuto 3: </p>
              <div />
              <p data-testid="attr3-card">{cardAttr3}</p>
            </div>
          </div>

          <div className="div-raridade">

            { cardRare === 'normal'
              ? <div className="normal"><p data-testid="rare-card">Normal</p></div>
              : null }

            { cardRare === 'raro'
              ? <div className="raro"><p data-testid="rare-card">Raro</p></div>
              : null }

            { cardRare === 'muito raro'
              ? <div className="muito-raro"><p>Muito raro</p></div>
              : null }

          </div>

          {cardTrunfo === true
            ? <div className="super-trunfo"><p>Super Trunfo</p></div>
            : null}

          {dates ? (
            <button
              type="button"
              onClick={ deleteButton }
              data-testid="delete-button"
            >
              Excluir
            </button>
          ) : (
            null
          )}
        </div>
      </section>
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
