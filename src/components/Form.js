import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
      dates,
    } = this.props;
    console.log(cardName);
    return (
      <div>
        <form>
          <label htmlFor="nameInput">
            Nome da carta:
            <input
              id="nameInput"
              name="cardName"
              type="text"
              data-testid="name-input"
              placeholder="Placeholder"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="descriptionInput">
            Descrição da carta:
            <textarea
              name="cardDescription"
              id="descriptionInput"
              type="text"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributoInput1">
            Atributo 1 da carta:
            <input
              name="cardAttr1"
              id="atributoInput1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              min={ 0 }
              max={ 90 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributoInput2">
            Atributo 2 da carta:
            <input
              name="cardAttr2"
              id="atributoInput2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              min={ 0 }
              max={ 90 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributoInput3">
            Atributo 3 da carta:
            <input
              name="cardAttr3"
              id="atributoInput3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              min={ 0 }
              max={ 90 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="imageInput">
            URL da imagem:
            <input
              name="cardImage"
              id="imageInput"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rareInput">
            Raridade da carta:
            <select
              name="cardRare"
              id="rareInput"
              type="text"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {/* {dates.find((item) => item.cardTrunfo === true) ? ( */}
          {hasTrunfo && dates.find((item) => item.cardTrunfo === true) ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="SuperTrunfo">
              <input
                name="cardTrunfo"
                id="SuperTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )}

          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
